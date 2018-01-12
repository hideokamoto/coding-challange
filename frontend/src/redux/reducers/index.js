import { combineReducers } from 'redux'

// custom reducers
import { departure } from './departure'
import { station } from './stations'

const rootReducer = combineReducers({
  departure,
  station
})

export default rootReducer
