const initialState = {
  entity: undefined,
  error: undefined,
  status: 'pending',
};

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_REPOS_PENDING': {
      return {
        ...state,
        status: 'loading',
      };
    }
    case 'GET_REPOS_SUCCESS': {
      return {
        ...state,
        entity: action.result,
        error: undefined,
        status: 'success',
      };
    }
    case 'GET_REPOS_FAILURE': {
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

export function getRepos(username) {
  return { payload: username, type: 'GET_REPOS' };
}
