/* @flow */
import { departureActionTypes } from '../types/departure'

export function getDepartureTime (
  lineName: string,
  station: string,
  timestamp: number = 0
) {
  return {
    type: departureActionTypes.GET_DEPARTURE_TIMES,
    lineName,
    station,
    timestamp
  }
}

export function getInboundDepartureTime (
  lineName: string,
  station: string,
  lineType: string,
  timestamp: number = 0
) {
  return {
    type: departureActionTypes.GET_INBOUND_DEPARTURE_TIME,
    lineName,
    station,
    lineType,
    timestamp
  }
}
export function setInboundDepartureTime (apiResponse: object) {
  return {
    type: departureActionTypes.SET_INBOUND_DEPARTURE_TIME,
    apiResponse
  }
}
export function unsetInboundDepartureTime () {
  return {
    type: departureActionTypes.UNSET_INBOUND_DEPARTURE_TIME
  }
}

export function getOutboundDepartureTime (
  lineName: string,
  station: string,
  lineType: string,
  timestamp: number = 0
) {
  return {
    type: departureActionTypes.GET_OUTBOUND_DEPARTURE_TIME,
    lineName,
    station,
    lineType,
    timestamp
  }
}
export function setOutboundDepartureTime (apiResponse: object) {
  return {
    type: departureActionTypes.SET_OUTBOUND_DEPARTURE_TIME,
    apiResponse
  }
}
export function unsetOutboundDepartureTime () {
  return {
    type: departureActionTypes.UNSET_OUTBOUND_DEPARTURE_TIME
  }
}
