import React, { PropTypes } from 'react'

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