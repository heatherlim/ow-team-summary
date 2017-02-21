const player = (state = {}, action) => {
  switch(action.type){
    case 'ADD_PLAYER':
      return {
        battletag: action.battletag
      }
    default:
      return state
  }
}

const players = (state = [], action) => {
  switch(action.type){
    case 'ADD_PLAYER':
      return [
        ...state,
        player(undefined, action)
      ]
    case 'RECEIVE_PLAYER_INFOS':
      return [  
        ...state,
        Object.assign({},{
        comprank: action.comprank, 
        battletag: action.player.battletag
        })
      ]
    default:
      return state
  }
}

export default players