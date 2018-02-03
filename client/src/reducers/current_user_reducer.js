import { FETCH_CURRENT_USER_DATA } from "../actions/types";

const initialState = {
  data: {}
}

function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default currentUserReducer;
