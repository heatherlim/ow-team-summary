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

 function fetchTeamInfo(players) {
  players.map(player => {
    return dispatch => {
      return fetch('http://localhost:4444/api/v3/u/' + player.battletag.replace("#", "-") + '/blob')
        .then(response => response.json())
        .then(json => dispatch(receivePlayerInfo(player, json)))
    }
  })
  
  //var parsedBattletag = player.battletag.replace("#", "-")
  // return dispatch => {
  //   return fetch('http://localhost:4444/api/v3/u/' + parsedBattletag + '/blob')
  //     .then(response => response.json())
  //     .then(json => dispatch(receivePlayerInfo(player, json)))
  // }
}

export function fetchPlayerInfo(player) {
  var parsedBattletag = player.battletag.replace("#", "-")
  return dispatch => {
    return fetch('http://localhost:4444/api/v3/u/' + parsedBattletag + '/blob')
      .then(response => response.json())
      .then(json => dispatch(receivePlayerInfo(player, json)))
  }
}


