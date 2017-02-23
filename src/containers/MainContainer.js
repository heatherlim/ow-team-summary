import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = (state) => {
  return {
    players: state.players,
    playersResponse: state.playersResponse,
    errors: state.errors
  }
}

const MainContainer = connect(
  mapStateToProps
)(Main)

export default MainContainer