export const increaseSpotScore = (spotId) =>{
  return {
    type: "INCREASE_SPOT_SCORE",
    payload: spotId
  }
}
