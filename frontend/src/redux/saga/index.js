/* eslint-disable no-constant-condition */
import { fork } from 'redux-saga/effects'

// Custom watchers
import { departureSaga } from './watcher/departure'

export default function * root () {
  yield fork(departureSaga)
}
