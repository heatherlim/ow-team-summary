const playersResponse = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_PLAYER_INFO':
      return [
        ...state,
        Object.assign({}, {
        comprank: action.comprank, 
        battletag: action.player.battletag
        })
      ]
    default:
      return state
  }
}

export default playersResponse