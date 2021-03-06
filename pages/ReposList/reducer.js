import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAIL } from './constants';

export default function reducer(state = { repos: [], user: '' }, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        repos: action.payload.data,
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
