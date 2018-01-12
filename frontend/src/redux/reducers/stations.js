/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux'
import { stationsActionTypes } from '../actions/types/stations'

export const station = combineReducers({
  latitude,
  longitude,
  stationData,
  fetchStatus,
  selectedStationName
})

export function selectedStationName (state = '', action) {
  switch (action.type) {
    case stationsActionTypes.UPDATE_SELECTED_STATION_NAME:
      return action.payload.name
    default:
      return state
  }
}

export function fetchStatus (
  state = {
    isFetching: false,
    hasFetched: false
  },
  action
) {
  switch (action.type) {
    case stationsActionTypes.UPDATE_FETCH_STATUS:
      const { isFetching, hasFetched } = action.payload
      return {
        isFetching,
        hasFetched
      }
    default:
      return state
  }
}

export function latitude (
  state = {
    value: 0,
    timestamp: 0
  },
  action
) {
  switch (action.type) {
    case stationsActionTypes.UNSET_LATLONG:
      return {
        value: 0,
        timestamp: 0
      }
    case stationsActionTypes.SET_LATITUDE:
      const { payload } = action
      const { timestamp, lat } = payload
      return {
        value: lat,
        timestamp
      }
    default:
      return state
  }
}

export function longitude (
  state = {
    value: 0,
    timestamp: 0
  },
  action
) {
  switch (action.type) {
    case stationsActionTypes.UNSET_LATLONG:
      return {
        value: 0,
        timestamp: 0
      }
    case stationsActionTypes.SET_LONGITUDE:
      const { payload } = action
      const { timestamp, long } = payload
      return {
        value: long,
        timestamp
      }
    default:
      return state
  }
}

export function stationData (
  state = {
    distance: '',
    long: 0,
    lat: 0,
    name: ''
  },
  action
) {
  switch (action.type) {
    case stationsActionTypes.SET_STATION: {
      const { distance, x, y, name } = action.payload.data
      return {
        distance,
        long: x,
        lat: y,
        name
      }
    }
    case stationsActionTypes.UNSET_STATION:
      return {
        distance: '',
        long: 0,
        lat: 0,
        name: ''
      }
    default:
      return state
  }
}
