/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux'
import { departureActionTypes } from '../actions/types/departure'

export const departure = combineReducers({
  inbound,
  outbound
})

export const getApiResponse = apiResponse => {
  return Object.keys(apiResponse).length === 0 ? [] : apiResponse
}

export function inbound (
  state = {
    isFetching: false,
    hasFetched: false,
    times: []
  },
  action
) {
  switch (action.type) {
    case departureActionTypes.GET_INBOUND_DEPARTURE_TIME:
      return {
        isFetching: true,
        hasFetched: false,
        times: []
      }
    case departureActionTypes.UNSET_INBOUND_DEPARTURE_TIME:
      return {
        isFetching: false,
        hasFetched: false,
        times: []
      }
    case departureActionTypes.SET_INBOUND_DEPARTURE_TIME:
      return {
        isFetching: false,
        hasFetched: true,
        times: getApiResponse(action.apiResponse)
      }
    default:
      return state
  }
}

export function outbound (
  state = {
    isFetching: false,
    hasFetched: false,
    times: []
  },
  action
) {
  switch (action.type) {
    case departureActionTypes.GET_OUTBOUND_DEPARTURE_TIME:
      return {
        isFetching: true,
        hasFetched: false,
        times: []
      }
    case departureActionTypes.UNSET_OUTBOUND_DEPARTURE_TIME:
      return {
        isFetching: false,
        hasFetched: false,
        times: []
      }
    case departureActionTypes.SET_OUTBOUND_DEPARTURE_TIME: {
      return {
        isFetching: false,
        hasFetched: true,
        times: getApiResponse(action.apiResponse)
      }
    }
    default:
      return state
  }
}
