import React from 'react'
import AddPlayer from '../containers/AddPlayer'
import PlayerListContainer from '../containers/PlayerListContainer'


const App = () => (
  <div>
    Players
    <AddPlayer />
    <PlayerListContainer />
  </div>
)

export default App