import { REQUEST_PROJECT_POSTS, RECEIVE_PROJECT_POSTS } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  items: []
};
const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PROJECT_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PROJECT_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT_POSTS:
    case REQUEST_PROJECT_POSTS:
      return {
        ...state,
        [action.projectId]: posts(state[action.projectId], action)
      };
    default:
      return state;
  }
};
