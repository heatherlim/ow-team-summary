import React from 'react'

const getAverage = (playerList) => {
  var sum = playerList.reduce((p,c) => p.comprank + c.comprank)
  // var sum = playerList.reduce((p,c) => (p.comprank + c.comprank)/2)
  return "Average SR: " + sum/playerList.length
}

const TeamSummary = ({playerList}) => {
  return(
    <div>
      Team Summary
      <div>  
        {playerList.map((player, index) => 
          <div key={index}>
            battletag: {player.battletag} | competitiverank: {player.comprank}
          </div>
        )}
      </div>
      <div>
      {playerList.length > 0 ?  getAverage(playerList): ""}
      </div>
    </div>
  )
}


export default TeamSummary