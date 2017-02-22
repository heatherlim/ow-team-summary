const playersResponse = (state = {
  players: []
}, action) => {
  switch(action.type) {
    case 'RECEIVE_PLAYER_INFO':
      let newPlayers = [...state.players]
      newPlayers.push({comprank: action.comprank,battletag: action.player.battletag})
      return Object.assign({},state,{players: newPlayers})
    default:
      return state
  }
}

export default playersResponse