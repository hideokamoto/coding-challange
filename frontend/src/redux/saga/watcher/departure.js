/* eslint-disable no-constant-condition, no-use-before-define */
import { call, put, fork, take } from 'redux-saga/effects'

// Action types
import { departureActionTypes } from '../../actions/types/departure'

// Actions
import * as actions from '../../actions/creators/departure'

// Workers
import { getDepartureTime } from '../worker/departure'

export function * departureSaga () {
  yield fork(getDepartures)
}

export function * getDepartures () {
  while (true) {
    const { lineName, station, timestamp } = yield take(
      departureActionTypes.GET_DEPARTURE_TIMES
    )
    try {
      const inbound = yield call(
        getDepartureTime,
        lineName,
        station,
        'inbound',
        timestamp
      )
      const outbound = yield call(
        getDepartureTime,
        lineName,
        station,
        'outbound',
        timestamp
      )
      yield put(actions.setInboundDepartureTime(inbound.body))
      yield put(actions.setOutboundDepartureTime(outbound.body))
    } catch (e) {
      yield put(actions.setInboundDepartureTime({}))
      yield put(actions.setOutboundDepartureTime({}))
    }
  }
}
