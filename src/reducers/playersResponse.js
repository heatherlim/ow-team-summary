const playersResponse = (state = {
  isFetching: false,
  players: []
}, action) => {
  switch(action.type) {
    case 'REQUEST_PLAYER_INFO':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_PLAYER_INFO':
      let newPlayers = [...state.players]
      newPlayers.push({comprank: action.comprank,battletag: action.player.battletag})
      return Object.assign({},state,{isFetching: false, players: newPlayers})
    default:
      return state
  }
}

export default playersResponse