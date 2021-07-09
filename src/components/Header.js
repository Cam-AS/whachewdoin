import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../firebase/firebase';

export default class Header extends Component {

  logout() {
    firebase.instance().auth.signOut();
  }


  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              {
                user ?
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={() => this.logout()}>
                      Logout
                    </button>
                  </li>
                  : null
              }

              {
                !user ?

                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  : null
              }

              {
                !user ?

                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  : null
              }


            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
