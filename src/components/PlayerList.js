import React, { PropTypes } from 'react'
import TeamSummaryContainer from '../containers/TeamSummaryContainer'

const PlayerList = ({players, playersResponse, errors, handleDeletePlayer, handleSubmitTeam}) => {
  return  (
    <div>
      <div>
        {players.map((player, index) => 
          <div key={index}>
            {player.battletag} <button onClick={() => handleDeletePlayer(player.battletag)}>X</button>
          </div>
        )}
      </div>
      <button
        onClick={() => handleSubmitTeam(players)}
        disabled={!(players.length > 1)}
      >
        Submit
      </button>
      {playersResponse.isFetching ? "LOADING..... PUT SPINNER HERE" : ""}
      {players.length === playersResponse.players.length && players.length !== 0 && errors.length === 0 ? <TeamSummaryContainer /> : ""}
      {errors.length !== 0 ? "Error Component Here" : ""}
    </div>
  )
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    battletag: PropTypes.string.isRequired
  }).isRequired).isRequired,
  handleSubmitTeam: PropTypes.func.isRequired
}

export default PlayerList