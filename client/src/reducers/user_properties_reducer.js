import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';
import { FETCH_USER_PROPERTIES, FETCH_USER_PROPERTY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_PROPERTY:
      const property = action.payload;
      return { ...state, [property._id]: property };
    case FETCH_USER_PROPERTIES:
      return { ...state, ...mapKeys(action.payload, '_id') };
    default:
      return state;
  }
}
