import React, { PropTypes } from 'react'
import TeamSummaryContainer from '../containers/TeamSummaryContainer'

const PlayerList = ({players, playerList, errors, handleDeletePlayer, handleSubmitTeam}) => {
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
      >
        Submit
      </button>
      {players.length === playerList.length && players.length !== 0 && errors.length === 0 ? <TeamSummaryContainer /> : ""}
      {errors.length !== 0 ? "Error Component Here" : ""}
    </div>
  )
}

// PlayerList.propTypes = {
//   players: PropTypes.arrayOf(PropTypes.shape({
//     battletag: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   handleSubmitTeam: PropTypes.func.isRequired
// }

export default PlayerList