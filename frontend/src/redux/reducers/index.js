import { combineReducers } from 'redux'

// custom reducers
import { departure } from './departure'

const rootReducer = combineReducers({
  departure
})

export default rootReducer
