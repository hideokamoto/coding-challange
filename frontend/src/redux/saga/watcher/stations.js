/* eslint-disable no-constant-condition, no-use-before-define */
import { call, put, fork, takeEvery } from 'redux-saga/effects'
import _ from 'lodash'

// Action types
import { stationsActionTypes } from '../../actions/types/stations'

// Actions
import * as actions from '../../actions/creators/stations'
import { getDepartureTime } from '../../actions/creators/departure'

// Workers
import { getStation, getTargetStation } from '../worker/stations'
import { getGeoLocation } from '../worker/geo'

// assets
import stationLists from '../../../assets/stations'

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
    const stations = yield call(getStation, lat, long)
    const stationData = yield call(getTargetStation, stations)
    yield put(actions.setStation(stationData))
    const { name } = stationData
    const selectedStation = _.filter(stationLists, data => data.text === name)
    const selectedStationName = selectedStation[0]
      ? selectedStation[0].value
      : ''
    yield put(actions.updateSelectedStationName(selectedStationName))
    yield put(getDepartureTime('karasuma-line', selectedStationName))
    yield put(actions.updateFetchStatus(false, true))
  } catch (e) {
    console.log(e)
    yield put(actions.setStation({}))
    yield put(actions.updateFetchStatus(false, true, e.message))
  }
}
