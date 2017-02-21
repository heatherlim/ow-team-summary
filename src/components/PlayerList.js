import React, { PropTypes } from 'react'

const PlayerList = ({players, handleSubmitTeam}) => {
  return  (
    <div>
      <div>
        {players.map((player, index) => 
          <div key={index}>
            {player.battletag}
          </div>
        )}
      </div>
      <button
        onClick={() => handleSubmitTeam(players)}
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