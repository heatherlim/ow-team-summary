import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Raven } from 'raven-for-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import players from './reducers/players'
import playersResponse from './reducers/playersResponse'
import errors from './reducers/errors'
import { Router, Route, browserHistory } from 'react-router';
import TeamSummary from './components/TeamSummary';

const owApp = combineReducers({
  players,
  playersResponse,
  errors
})

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}


let store = createStore(
  owApp,
  applyMiddleware(
    thunkMiddleware,
    logger, 
    crashReporter
  ))
  
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/summary" component={TeamSummary} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

