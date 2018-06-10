import { REQUEST_MAP_DATA, RECEIVE_MAP_DATA } from "../actions/types";

const INITIAL_STATE = {
  isFetching: false,
  data: {}
};
function mapDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_MAP_DATA:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_MAP_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

export default mapDataReducer;
