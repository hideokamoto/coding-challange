import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import root from '../saga'

export function configureStore (initialState) {
  // Create Sage middleware
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(root)
  return store
}
