import { GET_REPOS_DETAIL, GET_REPOS_DETAIL_SUCCESS, GET_REPOS_DETAIL_FAIL } from './constants';

export default function reducer(state = { repo: {} }, action) {
  switch (action.type) {
    case GET_REPOS_DETAIL:
      return { ...state, loading: true };
    case GET_REPOS_DETAIL_SUCCESS:
      return { ...state, loading: false, repo: action.payload.data };
    case GET_REPOS_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories',
      };
    default:
      return state;
  }
}

export function repoDetail(user, repo) {
  return {
    type: GET_REPOS_DETAIL,
    payload: {
      request: {
        url: `/users/${user}/repos/${repo}`,
      },
    },
  };
}
