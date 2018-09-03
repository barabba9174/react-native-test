import { GET_DIMENSIONS, SET_DIMENSIONS } from './constants';

export default function reducer(state = { }, action) {
  switch (action.type) {
    case GET_DIMENSIONS:
      return state;
    case SET_DIMENSIONS: {
      return {
        ...state,
        dimensions: {
          ...action.payload,
          landscape: action.payload.width > action.payload.height,
          asTablet: (action.payload.width > action.payload.height) && action.payload.width >= 600,
        },
      }; }
    default:
      return state;
  }
}

export function setDimensions(dimensions) {
  return {
    type: SET_DIMENSIONS,
    payload: dimensions,
  };
}
