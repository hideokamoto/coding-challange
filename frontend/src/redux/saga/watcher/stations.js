/* eslint-disable no-constant-condition, no-use-before-define */
import { call, put, fork, takeEvery } from 'redux-saga/effects'

// Action types
import { stationsActionTypes } from '../../actions/types/stations'

// Actions
import * as actions from '../../actions/creators/stations'

// Workers
import { getStation } from '../worker/stations'
import { getGeoLocation } from '../worker/geo'

export function * stationSaga () {
  yield fork(findStationByGeo)
}

export function * findStationByGeo () {
  yield takeEvery(stationsActionTypes.FIND_STATION, runFindStationByGeo)
}
export function * runFindStationByGeo () {
  try {
    yield put(actions.updateFetchStatus(true))
    const geoData = yield call(getGeoLocation)
    const { lat, long, timestamp } = geoData
    yield put(actions.setLatitude(lat, timestamp))
    yield put(actions.setLongitude(long, timestamp))
    // console.log(geoData)
    // eslint-disable-next-line
    const stations = yield call(getStation, lat, long)
    // console.log(stations)
    yield put(actions.setStation({}))
  } catch (e) {
    console.log(e)
    yield put(actions.setStation({}))
  } finally {
    yield put(actions.updateFetchStatus(false, true))
  }
}
