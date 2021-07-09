import React, { Component } from 'react';


export default class Home extends Component {
  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <div>
        Aweeeeh {user.email}
      </div>
    )
  }
}
