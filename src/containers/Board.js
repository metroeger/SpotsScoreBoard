// src/containers/Board.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Podium from './Podium'
import Spot, { spotShape } from '../components/Spot'
import './Board.css'

export default class Board extends PureComponent {
  static propTypes = {
    spots: PropTypes.arrayOf(spotShape).isRequired,
    updateSpot: PropTypes.func.isRequired
  }

  render() {
    const { spots, updateSpot } = this.props

    return (
      <div>
        <Title content="Scoreboard" />

        <Podium spots={spots} />

        <ul className="Board">
          {spots
            .sort((p1, p2) => (p2.score - p1.score))
            .map((spot, index) => (
            <Spot
              key={index}
              onChange={updateSpot}
              { ...spot }
            />
          ))}
        </ul>
      </div>
    )
  }
}
