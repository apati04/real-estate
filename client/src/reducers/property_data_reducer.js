import { FETCH_PROPERTY_DATA, LOADING_DATA } from "../actions/types";

const initialState = {
  data: {},
  loading: ""
}

function propertyDataReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        data: {},
        loading: action.payload
      };
    case FETCH_PROPERTY_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default propertyDataReducer;
