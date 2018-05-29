import { getUserData } from '../api';
import makeThunkRequest from '../helpers/makeThunkRequest';

const initialState = {
  entity: undefined,
  error: undefined,
  status: 'pending',
};

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        status: 'loading',
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        entity: action.result,
        error: undefined,
        status: 'success',
      };
    }
    case 'LOGIN_FAILURE': {
      return {
        ...state,
        error: action.error,
        status: 'failure',
      };
    }
    default:
      return state;
  }
}

// middleware
// export function getUser(username) {
//   return {
//     type: 'LOGIN',
//     payload: username,
//     promise: getUserData,
//   };
// }

// thunk
// export function getUser(username) {
//   return makeThunkRequest(getUserData, { payload: username, type: 'LOGIN' });
// }

// saga
export function getUser(username) {
  return { payload: username, type: 'LOGIN' };
}
