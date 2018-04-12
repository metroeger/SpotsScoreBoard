export const spots = [
  { id: 1, name: 'Tahiti', score: 4 },
  { id: 2, name: 'Nepal', score: 6 },
  { id: 3, name: 'Stromboli', score: 3 },
  { id: 4, name: 'BVI', score: 4 },
  { id: 5, name: 'Cape Verde', score: 5 },
  { id: 6, name: 'Pipa', score: 3 }
]

export default function (state=spots, {type, payload} = {}){
  return state
}
