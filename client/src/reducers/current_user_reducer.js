import { FETCH_CURRENT_USER_DATA } from "../actions/types";

function currentUserReducer(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER_DATA:
      return action.payload || false;
    default:
      return state;
  }
}

export default currentUserReducer;
