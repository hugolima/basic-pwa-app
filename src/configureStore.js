import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import throttle from 'lodash.throttle'
import reducers from './rdx-reducers'
import { saveJsonObject, getJsonObject } from './commons/local-storage'

const middleware = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  const { logger } = require('redux-logger')
  /* eslint-enable global-require */
  middleware.push(logger)
}

export default function configureStore() {
  const preloadedState = getJsonObject('state') || {}
  const store = createStore(reducers, preloadedState, applyMiddleware(...middleware))

  store.subscribe(throttle(() => saveJsonObject('state', store.getState()), 3000))

  return store
}
