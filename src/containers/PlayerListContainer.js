import { connect } from 'react-redux'
import PlayerList from '../components/PlayerList'
import { fetchPlayerInfo } from '../actions'

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitTeam: (players) => {
      players.map(player => dispatch(fetchPlayerInfo(player)))
      //dispatch(fetchTeamInfo(players))
    }
  }
}

const PlayerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList)

export default PlayerListContainer