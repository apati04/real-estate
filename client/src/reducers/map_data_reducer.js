import { FETCH_MAP_DATA } from "../actions/types";

const initialState = {
  data: {}
}

function mapDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MAP_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default mapDataReducer;
