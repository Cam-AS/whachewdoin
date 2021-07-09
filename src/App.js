import { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PropsRoute from './components/PropsRoute';
import GuardedRoute from './components/GuardedRoute';

import firebase from './firebase/firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.auth = firebase.instance().auth;
    this.state = {
      user: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.auth.onAuthStateChanged((user) => {
      this.setState({ user: user, loading: false });
    });
  }

  render() {
    const { user, loading } = this.state;

    return (
      <div>
        {loading ?
          <div>Loading</div>
          :
          <BrowserRouter>
            <Header user={user} />

            <div className="container mt-3">
              <GuardedRoute path="/" exact component={Home} user={user} />
              <PropsRoute path="/login" exact component={Login} user={user} />
              <PropsRoute path="/register" exact component={Register} user={user} />
            </div>
          </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;