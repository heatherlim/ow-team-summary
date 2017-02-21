import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'
import { fetchTeamInfo } from '../actions'

const mapStateToProps = (state) => {
  return {
    players: state.players,
    playerList: state.playersResponse,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitTeam: (players) => {
      dispatch(fetchTeamInfo(players))
    }
  }
}

const PlayerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default PlayerListContainer