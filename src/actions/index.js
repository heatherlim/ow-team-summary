import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

export const addPlayer = (battletag) => {
  return {
    type: 'ADD_PLAYER',
    battletag
  }
}

export const deletePlayer = (battletag) => {
  return {
    type: 'DELETE_PLAYER',
    battletag
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

 export function fetchTeamInfo(players) {
   return dispatch => {
     // Requesting posts... isFetching will be true here
    Promise.all(players.map(player =>
        fetch('http://localhost:4444/api/v3/u/' + player.battletag.replace("#", "-") + '/blob')
        .then(resp => resp.json())
        .catch(err => dispatch(handleErrorMessage(err)))
    )).then(jsonArray => {
        players.forEach(function(player, index){
          dispatch(receivePlayerInfo(player, jsonArray[index]))
          // Dispatch action that changes isFetching to false? Receive player info should set it to false?
        })
    })
  }
}


