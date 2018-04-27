import { FETCH_PROPERTY_IMG, RESET_PROP_DATA } from '../actions/types';

const initialState = {
  img: {}
}

function propertyImgDataReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PROP_DATA:
      return {
        ...state,
        img: action.payload
      };
    case FETCH_PROPERTY_IMG:
      return {
        ...state,
        img: action.payload
      };
    default:
      return state;
  }
}

export default propertyImgDataReducer;