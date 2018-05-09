import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';
import {
  FETCH_USER_PROPERTIES,
  FETCH_USER_PROPERTY,
  DELETE_SELECTED_PROPERTY
} from '../actions/types';

const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROPERTY:
      const property = action.payload;
      return { ...state, [property._id]: property };
    case FETCH_USER_PROPERTIES:
      const properties = action.payload;
      return { ...state, ...mapKeys(properties, '_id') };
    case DELETE_SELECTED_PROPERTY:
      // payload should be id of property
      return omit(state, action.payload);
    default:
      return state;
  }
}
