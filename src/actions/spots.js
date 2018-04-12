export const increaseSpotScore = (spotId) =>{
  return {
    type: "INCREASE_SPOT_SCORE",
    payload: spotId
  }
}

export const decreaseSpotScore = (spotId) =>{
  return {
    type: 'DECREASE_SPOT_SCORE',
    payload: spotId
  }
}
