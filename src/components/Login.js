import React, { Component } from 'react'

import Button from './Button';
import ShowIf from './ShowIf';

import Firebase from '../firebase/firebase';

export default class Login extends Component {

  constructor(props) {
    super(props);

    if (props.user) {
      this.props.history.push('/');
    }

    this.auth = Firebase.instance().auth;
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    }
  }

  onEmailChanged(e) {
    this.setState({
      email: e.target.value
    });
  }

  onPasswordChanged(e) {
    this.setState({
      password: e.target.value
    });
  }

  async login(e) {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { email, password } = this.state;

      await this.auth
        .signInWithEmailAndPassword(email, password);

      this.props.history.push('/');
    } catch (err) {
      this.setState({ error: err.message });
    }

    this.setState({ loading: false });
  }

  render() {
    const { error, loading } = this.state;

    return (
      <form onSubmit={(e) => this.login(e)}>

        <h1 className="h3 mb-3 text-center">Please Login</h1>

        <div>
          <label className="form-label">
            Email address
          </label>
          <input
            value={this.state.email}
            onChange={(e) => this.onEmailChanged(e)}
            type="email"
            className="form-control"
          />
        </div>

        <div className="mt-4">
          <label className="form-label">
            Password
          </label>
          <input
            value={this.state.password}
            onChange={(e) => this.onPasswordChanged(e)}
            type="password"
            className="form-control" />
        </div>

        <ShowIf isTrue={error}>
          <div className="alert alert-danger mt-4">
            {error}
          </div>
        </ShowIf>

        <div className="text-center mt-4">
          <Button className="btn btn-primary px-5"
            type="submit"
            loading={loading}>
            Login
          </Button>
        </div>
      </form>
    )
  }
}
