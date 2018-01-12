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
    data
  }
}
export function unsetStation () {
  return {
    type: stationsActionTypes.UNSET_STATION
  }
}

export function setLatitude (lang: number) {
  return {
    type: stationsActionTypes.SET_LATITUDE,
    lang
  }
}
export function setLongitude (long: number) {
  return {
    type: stationsActionTypes.SET_LONGITUDE,
    long
  }
}
export function unsetLatLong () {
  return {
    type: stationsActionTypes.UNSET_LATLONG
  }
}
