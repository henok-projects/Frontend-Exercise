import { all } from 'redux-saga/effects';
import userSagas from './userSagas';
import watchUserActions from './userSagas';

export default function* rootSaga() {
  //Including user saga in main runner setup
  yield all([watchUserActions()]);
}
