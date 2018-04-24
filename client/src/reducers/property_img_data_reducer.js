import { FETCH_PROPERTY_IMG } from '../actions/types';

const initialState = {
  img: {}
}

function propertyImgDataReducer(state = initialState, action) {
  switch (action.type) {
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
