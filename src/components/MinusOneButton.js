import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './MinusOneButton.css'

export default class MinusOneButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="MinusOne" onClick={this.props.onClick}>-</button>
    )
  }
}
