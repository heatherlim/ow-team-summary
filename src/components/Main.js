import React from 'react'
import AddPlayerContainer from '../containers/AddPlayerContainer'
import PlayerListContainer from '../containers/PlayerListContainer'
import TeamSummaryContainer from '../containers/TeamSummaryContainer'

const Main = ({playersResponse, players, errors}) => {
  return (
    <div>
      <AddPlayerContainer />
      <PlayerListContainer />
        {players.length === playersResponse.players.length && players.length !== 0 && errors.length === 0 ? <TeamSummaryContainer /> : ""}
    </div>
  )
}

export default Main