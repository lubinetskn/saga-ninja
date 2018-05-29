import { put, call, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export default function makeSagaRequest(getData) {
  return function*(action) {
    yield put({
      type: `${action.type}_PENDING`,
    });

    try {
      // const { result, timeout } = yield race({
      //   result: call(getData, action.payload),
      //   timeout: call(delay, 1000),
      // });

      // if (result) {
      //   yield put({
      //     type: `${action.type}_SUCCESS`,
      //     result,
      //   });
      //   return result;
      // } else {
      //   yield put({
      //     type: `${action.type}_TIMEOUT`,
      //   });
      // }

      const result = yield call(getData, action.payload);
      yield put({
        type: `${action.type}_SUCCESS`,
        result,
      });
      return { result };
    } catch (error) {
      yield put({
        type: `${action.type}_FAILURE`,
        error,
      });
      return { error };
    }
  };
}
