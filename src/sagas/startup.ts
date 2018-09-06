import { call } from 'redux-saga/effects'

// process STARTUP actions
export function* startup() {
  console.log('called......................................');
  yield call(console.log, 'startup')
}
