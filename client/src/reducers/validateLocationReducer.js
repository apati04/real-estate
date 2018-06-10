import { REQUEST_LOCATION, RECEIVE_LOCATION } from '../actions/types';
const INITIAL_STATE = {
  isFetching: false,
  data: []
};
const validateLocation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOCATION:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};

export default validateLocation;
