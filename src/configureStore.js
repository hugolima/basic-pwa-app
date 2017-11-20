import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './rdx-reducers'

const middleware = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  const { logger } = require('redux-logger')
  /* eslint-enable global-require */
  middleware.push(logger)
}

export default function configureStore() {
  const store = compose(applyMiddleware(...middleware))(createStore)(reducers)
  return store
}
