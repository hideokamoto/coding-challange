/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux'
import { departureActionTypes } from '../actions/types/departure'

export const departure = combineReducers({
  inbound,
  outbound
})

export function inbound (
  state = {
    isFetching: false,
    times: []
  },
  action
) {
  switch (action.type) {
    case departureActionTypes.GET_INBOUND_DEPARTURE_TIME:
      return {
        isFetching: true,
        times: []
      }
    case departureActionTypes.UNSET_INBOUND_DEPARTURE_TIME:
      return {
        isFetching: false,
        times: []
      }
    case departureActionTypes.SET_INBOUND_DEPARTURE_TIME:
      return {
        isFetching: false,
        times: action.apiResponse
      }
    default:
      return state
  }
}

export function outbound (
  state = {
    isFetching: false,
    times: []
  },
  action
) {
  switch (action.type) {
    case departureActionTypes.GET_OUTBOUND_DEPARTURE_TIME:
      return {
        isFetching: true,
        times: []
      }
    case departureActionTypes.UNSET_OUTBOUND_DEPARTURE_TIME:
      return {
        isFetching: false,
        times: []
      }
    case departureActionTypes.SET_OUTBOUND_DEPARTURE_TIME:
      return {
        isFetching: false,
        times: action.apiResponse
      }
    default:
      return state
  }
}
