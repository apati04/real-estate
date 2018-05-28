import { AUTH_SUCCESS, AUTH_ERROR } from '../actions';
const INITIAL_STATE = {
  authenticated: '',
  authError: ''
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
