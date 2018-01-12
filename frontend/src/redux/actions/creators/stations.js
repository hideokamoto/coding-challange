/* @flow */
import { stationsActionTypes } from '../types/stations'

export function findStation () {
  return {
    type: stationsActionTypes.FIND_STATION
  }
}
export function setStation (data: {}) {
  return {
    type: stationsActionTypes.SET_STATION,
    payload: {
      data
    }
  }
}
export function unsetStation () {
  return {
    type: stationsActionTypes.UNSET_STATION
  }
}

export function setLatitude (lat: number, timestamp: number) {
  return {
    type: stationsActionTypes.SET_LATITUDE,
    payload: {
      lat,
      timestamp
    }
  }
}
export function setLongitude (long: number, timestamp: number) {
  return {
    type: stationsActionTypes.SET_LONGITUDE,
    payload: {
      long,
      timestamp
    }
  }
}
export function unsetLatLong () {
  return {
    type: stationsActionTypes.UNSET_LATLONG
  }
}

export function updateFetchStatus (
  isFetching: boolean = false,
  hasFetched: boolean = false,
  errorMessage: string = ''
) {
  return {
    type: stationsActionTypes.UPDATE_FETCH_STATUS,
    payload: {
      isFetching,
      hasFetched,
      errorMessage
    }
  }
}

export function updateSelectedStationName (name: string = '') {
  return {
    type: stationsActionTypes.UPDATE_SELECTED_STATION_NAME,
    payload: {
      name
    }
  }
}
