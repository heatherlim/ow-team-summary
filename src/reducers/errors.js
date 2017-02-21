const errors = (state = [], action) => {
  switch(action.type){
    case 'HANDLE_ERROR_MESSAGE':
      return action.error
    default:
      return state
  }
}

export default errors