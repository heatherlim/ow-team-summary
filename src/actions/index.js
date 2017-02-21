import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

export const addPlayer = (battletag) => {
  return {
    type: 'ADD_PLAYER',
    battletag
  }
}

export const submitTeamAction = (players) => {
  return {
    type: 'SUBMIT_TEAM_ACTION',
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

 export function fetchTeamInfo(players) {
   return dispatch => {
    Promise.all(players.map(player =>
        fetch('http://localhost:4444/api/v3/u/' + player.battletag.replace("#", "-") + '/blob')
        .then(resp => resp.json())
    )).then(jsonArray => {
        players.forEach(function(player, index){
          dispatch(receivePlayerInfo(player, jsonArray[index]))
        })
    })
  }
}


