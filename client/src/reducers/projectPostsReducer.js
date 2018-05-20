import {
  REQUEST_PROJECT_POSTS,
  RECEIVE_PROJECT_POSTS,
  DELETE_SELECTED_PROPERTY
} from '../actions/types';

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
    case DELETE_SELECTED_PROPERTY:
      const newItems = state.items.filter(item => item._id !== action.postId);
      return {
        ...state,
        items: newItems,
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
    case DELETE_SELECTED_PROPERTY:
      return {
        ...state,
        [action.projectId]: posts(state[action.projectId], action)
      };
    default:
      return state;
  }
};
