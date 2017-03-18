import 'babel-polyfill'
import fetch from 'isomorphic-fetch'



export const addPlayer = (battletag) => {
  return {
    type: 'ADD_PLAYER',
    battletag
  }
}

export const displayAddPlayerError = (errorMessage) => {
  return {
    type: 'DISPLAY_ADD_PLAYER_ERROR',
    errorMessage
  }
}

export const deletePlayer = (battletag) => {
  return {
    type: 'DELETE_PLAYER',
    battletag
  }
}

export const handleClearError = () => {
  return {
    type: 'CLEAR_ERRORS'
  }
}

function requestPlayerInfo(players) {
  return {
    type: 'REQUEST_PLAYER_INFO',
    players
  }
}

function receivePlayerInfo(player, json) {
  return {
    type: 'RECEIVE_PLAYER_INFO',
    player,
    comprank: json.competitive_rank
  }
}

function handleErrorMessage(player) {
  return {
    type: 'HANDLE_ERROR_MESSAGE',
    error: player
  }
}

export const handleClearPlayersResponse = () => {
  return {
    type: 'HANDLE_CLEAR_PLAYERS_RESPONSE'
  }
}

 export function fetchTeamInfo(players) {
   return dispatch => {
     dispatch(requestPlayerInfo(players))
    Promise.all(players.map(player =>
        fetch('http://localhost:9393/api/' + player.battletag.replace("#", "-"))
        .then(resp => resp.json())
        .catch(err => dispatch(handleErrorMessage(player)))
    )).then(jsonArray => {
        players.forEach(function(player, index){
          dispatch(receivePlayerInfo(player, jsonArray[index]))
        })
    })
  }
}


