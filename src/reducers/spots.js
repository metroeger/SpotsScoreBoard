export const spots = [
  { id: 1, name: 'Tahiti', score: 4 },
  { id: 2, name: 'Nepal', score: 6 },
  { id: 3, name: 'Stromboli', score: 3 },
  { id: 4, name: 'BVI', score: 4 },
  { id: 5, name: 'Cape Verde', score: 5 },
  { id: 6, name: 'Pipa', score: 3 }
]

export default function (state=spots, {type, payload} = {}){
  switch (type){
    case 'INCREASE_SPOT_SCORE':
      return state.map((spot)=>{
        if (spot.id !== payload) return spot
        return {...spot, score: spot.score +1}
      })
      case 'DECREASE_SPOT_SCORE':
        return state.map((spot)=>{
          if (spot.id !== payload) return spot
          if (spot.score <= 0){
            return {...spot, score: 0}
          }
          return {...spot, score: spot.score -1}
        })

    default:
    return state
  }
}
