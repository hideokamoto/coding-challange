/* eslint-disable no-constant-condition */
import { fork } from 'redux-saga/effects'

// Custom watchers

export default function * root () {
  yield fork(custom)
}

function * custom () {
  const retval = yield 'hoge'
  return retval
}
