import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'
import { fetchTeamInfo } from '../actions'

const mapStateToProps = (state) => {
  return {
    players: state.players
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