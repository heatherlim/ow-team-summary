import React from 'react'
import AddPlayer from '../containers/AddPlayer'
import PlayerListContainer from '../containers/PlayerListContainer'
import TeamSummaryContainer from '../containers/TeamSummaryContainer'

const App = () => (
  <div>
    Players
    <AddPlayer />
    <PlayerListContainer />
    <TeamSummaryContainer />
  </div>
)

export default App