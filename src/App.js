import React, { Component } from 'react'
import Board from './containers/Board'
import './App.css'

export const spots = [
  { id: 1, name: 'Tahiti', score: 4 },
  { id: 2, name: 'Nepal', score: 6 },
  { id: 3, name: 'Stromboli', score: 3 },
  { id: 4, name: 'BVI', score: 4 },
  { id: 5, name: 'Cape Verde', score: 5 },
  { id: 6, name: 'Pipa', score: 3 }
]

class App extends Component {
  state = { spots }

  updateSpot = (spotId, updates) => {
    this.setState({
      spots: this.state.spots.map((spot) => {
        if (spot.id !== spotId) return spot
        return { ...spot, ...updates }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Board
          spots={this.state.spots}
          updateSpot={this.updateSpot}
        />
      </div>
    )
  }
}

export default App
