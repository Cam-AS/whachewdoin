import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { loading, disabled, children, ...otherProps } = this.props;

    return (
      <button style={{
        position: 'relative'
      }}
        disabled={loading || disabled}
      {...otherProps}>
        {children}

        {
          loading ?
            <span 
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
            }}
             className="spinner-border">
            </span>
            :
            <span>
            </span>
        }
      </button>
    )
  }
}
