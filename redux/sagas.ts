import { put, takeLatest, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios'; // Import AxiosResponse type

import { setUsers } from './actions';

function* fetchUsers() {
  try {
    const response: AxiosResponse = yield axios.get(
      'https://65b683deda3a3c16ab00d19d.mockapi.io/users'
    );
    yield put(setUsers(response.data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

function* actionWatcher() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export function* rootSaga() {
  yield all([actionWatcher()]);
}
