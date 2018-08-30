import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAIL } from './constants';

export default function reducer(state = { repos: [], user: '' }, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS: {
      const { meta = {} } = action;
      const { previousAction = {} } = meta;
      const { payload: previousPayload = {} } = previousAction;
      const { request = {} } = previousPayload;
      return {
        ...state,
        loading: false,
        repos: action.payload.data,
        user: request.user || state.user,
      }; }
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories',
      };
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`,
        user,
      },
    },
  };
}
