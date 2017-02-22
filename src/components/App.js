import React from 'react'
import AddPlayerContainer from '../containers/AddPlayerContainer'
import PlayerListContainer from '../containers/PlayerListContainer'


const App = () => (
  <div>
    Players
    <AddPlayerContainer />
    <PlayerListContainer />
  </div>
)

export default App