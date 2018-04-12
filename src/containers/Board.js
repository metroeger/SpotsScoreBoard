// src/containers/Board.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Podium from './Podium'
import Spot, { spotShape } from '../components/Spot'
import './Board.css'
import {connect} from 'react-redux'

class Board extends PureComponent {
  static propTypes = {
    spots: PropTypes.arrayOf(spotShape).isRequired
    //updateSpot: PropTypes.func.isRequired
  }

  render() {
    const { spots } = this.props

    return (
      <div>
        <Title content="Scoreboard" />

        <Podium spots={spots} />

        <ul className="Board">
          {spots
            .sort((p1, p2) => (p2.score - p1.score))
            .map((spot, id) => (
            <Spot
              key={id}
              { ...spot }
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({spots}) => ({spots})

export default connect (mapStateToProps) (Board)
