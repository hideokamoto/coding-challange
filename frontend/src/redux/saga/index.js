/* eslint-disable no-constant-condition */
import { fork } from 'redux-saga/effects'

// Custom watchers
import { departureSaga } from './watcher/departure'
import { stationSaga } from './watcher/stations'

export default function * root () {
  yield fork(departureSaga)
  yield fork(stationSaga)
}
