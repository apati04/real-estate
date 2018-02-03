import { FETCH_PROPERTY_DATA } from "../actions/types";

const initialState = {
  data: {}
}

function propertyDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROPERTY_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default propertyDataReducer;
