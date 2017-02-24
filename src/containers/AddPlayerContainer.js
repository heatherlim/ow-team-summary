import { connect } from 'react-redux'
import AddPlayer from '../components/AddPlayer'
import { addPlayer, displayAddPlayerError, handleClearError } from '../actions'

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

function poundValid(string) {
  var count = 0
  var array = string.split("")
  for(var i = 0; i < array.length; ++i){
    if(array[i] === '#')
      count++
  }
  if (count > 0) {
    return true
  } 
}

function errorMessage(battletag) {
  if(poundValid(battletag)){
    var battleTagNumber = battletag.match(/#([^ ]*)/)[1]
    if(isNumber(battleTagNumber)) {
      return
    } else {
      return "BattleTag ID has to be a number. Ex. GenjiSucks#1234"
    }
  } else {
      return "Please format with full BattleTag and number. Ex. GenjiSucks#1234"
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPlayer: (battletag) => {
      if(errorMessage(battletag)) {
        dispatch(displayAddPlayerError(errorMessage(battletag)))
      } else {
        dispatch(handleClearError())
        dispatch(addPlayer(battletag))
      }
    }
  }
}

const AddPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlayer)

export default AddPlayerContainer