import { AUTH_USER, AUTH_ERROR, REQUEST_AUTH } from '../actions/types';
const INITIAL_STATE = {
  auth: '',
  errorMessage: '',
  isFetching: null
};
function currentUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, auth: action.payload, isFetching: false };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };
    case REQUEST_AUTH:
      return { ...state, isFetching: true };
    default:
      return state;
  }
}

export default currentUserReducer;
