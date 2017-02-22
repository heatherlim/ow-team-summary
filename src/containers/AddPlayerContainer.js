import { connect } from 'react-redux'
import AddPlayer from '../components/AddPlayer'
import { addPlayer } from '../actions'

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPlayer: (battletag) => {
      dispatch(addPlayer(battletag))
    }
  }
}

const AddPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlayer)

export default AddPlayerContainer