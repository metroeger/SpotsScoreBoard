// src/containers/Podium.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { spotShape } from '../components/Spot'
import Trophy from '../components/Trophy'
import './Podium.css'

export default class Podium extends PureComponent {
  static propTypes = {
    spots: PropTypes.arrayOf(spotShape).isRequired
  }

  trophies() {
    const tropies = ['gold', 'silver', 'bronze']

    return this.props.spots
      .slice(0, 3)
      .map((spot, index) => ({
        ...spot,
        trophy: tropies[index]
      }))
  }

  renderTropies = () => {
    return this.trophies()
      .map((trophy, index) => <Trophy key={index} { ...trophy } />)
  }

  render() {
    return (
      <div className="Podium">
        <ul>
          {this.renderTropies()}
        </ul>
      </div>
    )
  }
}
