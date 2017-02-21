import { connect } from 'react-redux'
import TeamSummary from '../components/TeamSummary'

const mapStateToProps = (state) => {
  return {
    playerList: state.playersResponse
  }
}

const TeamSummaryContainer = connect(
  mapStateToProps
)(TeamSummary)

export default TeamSummaryContainer