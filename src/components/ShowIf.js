import React, { Component } from 'react'

export default class ShowIf extends Component {
  render() {

    const { isTrue, children } = this.props;

    return (
      <div>
        {
          isTrue ?
            <div>
              {children}
            </div>
            :
            <div>
            </div>
        }
      </div>
    )
  }
}
