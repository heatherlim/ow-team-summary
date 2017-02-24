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
    comprank: json.us.stats.competitive.overall_stats.comprank
  }
}

function handleErrorMessage(err) {
  return {
    type: 'HANDLE_ERROR_MESSAGE',
    error: err
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
        fetch('http://localhost:4444/api/v3/u/' + player.battletag.replace("#", "-") + '/blob')
        .then(resp => resp.json())
        .catch(err => dispatch(handleErrorMessage(err)))
    )).then(jsonArray => {
        players.forEach(function(player, index){
          dispatch(receivePlayerInfo(player, jsonArray[index]))
        })
    })
  }
}


