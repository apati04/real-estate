import {
  REQUEST_LOCATION,
  RECEIVE_LOCATION_SUCCESS,
  RECEIVE_LOCATION_ERROR
} from '../actions/types';
const INITIAL_STATE = {
  isFetching: false,
  data: null,
  error: null
};
const validateLocation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOCATION:
      return { ...state, isFetching: true };
    case RECEIVE_LOCATION_SUCCESS:
    case RECEIVE_LOCATION_ERROR:
    default:
      return state;
  }
};

export default validateLocation;
