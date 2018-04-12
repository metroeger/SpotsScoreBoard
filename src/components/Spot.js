// src/components/Spot.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'
import './Spot.css'
import {connect} from 'react-redux'
import {increaseSpotScore} from '../actions/spots'


export const spotShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

class Spot extends PureComponent {
  static propTypes = {
    ...spotShape.isRequired,
    increaseSpotScore: PropTypes.func.isRequired

  }

  increaseScore = () => {
    const { id } = this.props
    this.props.increaseSpotScore(id)
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Spot">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.increaseScore} />
      </li>
    )
  }
}

const mapDispatchToProps = {
  increaseSpotScore
}

export default connect (null, mapDispatchToProps) (Spot)
