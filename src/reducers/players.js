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
    case 'DELETE_PLAYER':
      const foundPlayer = state.find(player => player.battletag === action.battletag)
      const copyState = [...state]
      const index = copyState.indexOf(foundPlayer)
      copyState.splice(index,1)
      return copyState
    default:
      return state
  }
}

export default players