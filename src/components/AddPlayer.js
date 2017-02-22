import React, { PropTypes } from 'react'

const AddPlayer = ( {dispatch, handleAddPlayer} ) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        // dispatch(addPlayer(input.value))
        handleAddPlayer(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Player
        </button>
      </form>
    </div>
  )
}

export default AddPlayer