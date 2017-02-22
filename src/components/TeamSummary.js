import React from 'react'

const getAverage = (playerList) => {
  var sum = playerList.reduce((p,c) => p.comprank + c.comprank)
  return "Average SR: " + sum/playerList.length
}

const TeamSummary = ({playersResponse}) => {
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
    </div>
  )
}


export default TeamSummary