/* eslint-disable no-constant-condition, no-use-before-define */
import { call, put, fork, takeEvery } from 'redux-saga/effects'

// Action types
import { stationsActionTypes } from '../../actions/types/stations'

// Actions
import * as actions from '../../actions/creators/stations'

// Workers
import { getGeoLocation } from '../worker/geo'

export function * stationSaga () {
  yield fork(findStationByGeo)
}

export function * findStationByGeo () {
  yield takeEvery(runFindStationByGeo, stationsActionTypes.FIND_STATION)
}
export function * runFindStationByGeo () {
  try {
    const geoData = yield call(getGeoLocation)
    console.log(geoData)
    yield put(actions.setStation({}))
  } catch (e) {
    console.log(e)
    yield put(actions.setStation({}))
  }
}
