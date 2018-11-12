import { call } from 'redux-saga/effects';
import loadData from './sagas/loadData';

export function* defaultSaga() {
  yield call(loadData);
}

export default [defaultSaga];
