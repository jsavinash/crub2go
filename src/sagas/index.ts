import { all, takeLatest } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import {
  reduxStartup
} from '../state_action'
import { startup } from './startup';

export default function* root() {
  yield all([
    takeLatest(getType(reduxStartup), startup),
  ])
}
