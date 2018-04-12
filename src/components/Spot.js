// src/components/Spot.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'
import './Spot.css'
import {connect} from 'react-redux'
import {increaseSpotScore, decreaseSpotScore} from '../actions/spots'
import MinusOneButton from './MinusOneButton'

export const spotShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

class Spot extends PureComponent {
  static propTypes = {
    ...spotShape.isRequired,
    increaseSpotScore: PropTypes.func.isRequired,
    decreaseSpotScore: PropTypes.func.isRequired

  }

  increaseScore = () => {
    const { id } = this.props
    this.props.increaseSpotScore(id)
  }

  decreaseScore = () => {
    const { id } = this.props
    this.props.decreaseSpotScore(id)
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Spot">
        <p className="name">{name}</p>
        <MinusOneButton onClick = {this.decreaseScore} />
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.increaseScore} />
      </li>
    )
  }
}

const mapDispatchToProps = {
  increaseSpotScore,
  decreaseSpotScore
}

export default connect (null, mapDispatchToProps) (Spot)
