// src/components/Spot.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'
import './Spot.css'

export const spotShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

export default class Spot extends PureComponent {
  static propTypes = {
    ...spotShape.isRequired,
    onChange: PropTypes.func.isRequired
  }

  increaseSpotScore = () => {
    const { id, score, onChange } = this.props
    onChange(id, { score: score + 1 })
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Spot">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.increaseSpotScore} />
      </li>
    )
  }
}
