import React from 'react'

const getAverage = (playerList) => {
  var sum = playerList.reduce((acc, sum) => acc + sum["comprank"], 0)
  return "Average SR: " + Math.floor(sum/playerList.length)
}

const TeamSummary = ({playersResponse, handleClearPlayersResponse}) => {
  return(
    <div>
      Team Summary
      <div>  
        {playersResponse.players.map((player, index) => 
          <div key={index}>
            battletag: {player.battletag} | competitiverank: {player.comprank}
          </div>
        )}
      </div>
      <div>
      {playersResponse.players.length > 0 ?  getAverage(playersResponse.players): ""}
      </div>
      <button
        onClick={() => handleClearPlayersResponse()}
      >
        Go Back
      </button>
    </div>
  )
}


export default TeamSummary