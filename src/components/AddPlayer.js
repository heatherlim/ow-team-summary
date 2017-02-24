import React from 'react'

const AddPlayer = ( {dispatch, handleAddPlayer, players} ) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        handleAddPlayer(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit" disabled={players.length >= 6}>
          Add Player
        </button>
      </form>
    </div>
  )
}

export default AddPlayer