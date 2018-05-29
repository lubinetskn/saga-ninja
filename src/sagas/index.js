import {
  takeLatest,
  take,
  takeEvery,
  all,
  select,
  put,
  fork,
} from 'redux-saga/effects';
import { getUserData, getReposData } from '../api';
import { getRepos } from '../reducers/repos';
import makeSagaRequest from '../helpers/makeSagaRequest';

function* onRepo() {
  yield takeLatest('GET_REPOS', makeSagaRequest(getReposData));
}

function* getReposAfterLogin() {
  yield takeLatest('LOGIN_SUCCESS', function*({ result }) {
    yield put(getRepos(result.login));
  });
}

function* login() {
  while (true) {
    const action = yield take('LOGIN');
    const task = yield fork(makeSagaRequest(getUserData), action);
    const { result, error } = yield task.done;
    console.log('result', result, error);
  }
}

// function* login() {
//   yield takeLatest('LOGIN', makeSagaRequest(getUserData));
// }

function* logger() {
  yield takeEvery('*', function*(action) {
    const store = yield select();
    console.log('action', action);
    console.log('store', store);
  });
}

export default function*() {
  yield all([login(), logger(), getReposAfterLogin(), onRepo()]);
}
