import { call, put, takeLatest } from 'redux-saga/effects';
import {
  requestLogin,
  loginSuccess,
  loginFailure,
  requestRegistration,
  registrationSuccess,
  registrationFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
} from './../slices/userSlice';
import { apiLoginUser, apiRegisterUser, apiFetchUsers, apiUpdateUserProfile } from '../../api/userApi';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

// Define a type alias for the action type
type ActionWithoutPayload = ActionCreatorWithoutPayload<string>;

function* loginSaga(action: { payload: any }): Generator<any, void, any> {
  try {
    const user: any = yield call(apiLoginUser, action.payload);
    yield put(loginSuccess(user.data));
  } catch (error: any) {
    yield put(loginFailure(error.response.data.message));
  }
}

function* registrationSaga(action: { payload: any }): Generator<any, void, any> {
  try {
    const user = yield call(apiRegisterUser, action.payload);
    yield put(registrationSuccess(user.data));
  } catch (error: any) {
    yield put(registrationFailure(error.response.data.message));
  }
}

function* fetchUsersSaga(): Generator<any, void, any> {
  try {
    const response = yield call(apiFetchUsers);
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* updateProfileSaga(action: { payload: { userId: any; updateData: any } }): Generator<any, void, any> {
  try {
    const response = yield call(apiUpdateUserProfile, action.payload.userId, action.payload.updateData);
    yield put(updateProfileSuccess(response.data));
  } catch (error: any) {
    yield put(updateProfileFailure(error.message));
  }
}

function* watchUserActions() {
  // Use the type alias in the takeLatest function calls
  yield takeLatest(requestLogin.type as unknown as ActionWithoutPayload, loginSaga);
  yield takeLatest(requestRegistration.type as unknown as ActionWithoutPayload, registrationSaga);
  yield takeLatest(fetchUsersRequest.type as unknown as ActionWithoutPayload, fetchUsersSaga);
  yield takeLatest<any>(updateProfileRequest.type, updateProfileSaga);
}

export default function* rootSaga() {
  yield watchUserActions();
}
