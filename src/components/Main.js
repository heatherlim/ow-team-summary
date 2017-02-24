import React from 'react'
import AddPlayerContainer from '../containers/AddPlayerContainer'
import PlayerListContainer from '../containers/PlayerListContainer'
import TeamSummaryContainer from '../containers/TeamSummaryContainer'
import ErrorContainer from '../containers/ErrorContainer'

const Main = ({playersResponse, players, errors}) => {
  return (
    <div>
      {playersResponse.players.length === 0 && !playersResponse.isFetching ?
      <div>
        <AddPlayerContainer />
        <PlayerListContainer />
      </div>
       : ""}
       
       {playersResponse.isFetching ? "LOADING..... PUT SPINNER HERE" : ""}
       {errors.length !== 0 ? <ErrorContainer /> : ""}
      
        {players.length === playersResponse.players.length && players.length !== 0 && errors.length === 0 ? <TeamSummaryContainer /> : ""}
    </div>
  )
}

export default Main