const errors = (state = [], action) => {
  switch(action.type){
    case 'HANDLE_ERROR_MESSAGE':
      return action.error
    case 'DISPLAY_ADD_PLAYER_ERROR':
      return action.errorMessage
    case 'CLEAR_ERRORS':
      return ""
    default:
      return state
  }
}

export default errors