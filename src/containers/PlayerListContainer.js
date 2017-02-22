import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'
import { fetchTeamInfo, deletePlayer } from '../actions'

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
    },
    handleDeletePlayer: (battletag) => {
      dispatch(deletePlayer(battletag))
    }
  }
}

const PlayerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default PlayerListContainer