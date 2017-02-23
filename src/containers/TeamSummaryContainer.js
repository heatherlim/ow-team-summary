import { connect } from 'react-redux'
import TeamSummary from '../components/TeamSummary'
import { handleClearPlayersResponse } from '../actions'

const mapStateToProps = (state) => {
  return {
    playersResponse: state.playersResponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClearPlayersResponse: () => {
      dispatch(handleClearPlayersResponse())
    }
  }
}

const TeamSummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSummary)

export default TeamSummaryContainer