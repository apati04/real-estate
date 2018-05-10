import mapKeys from 'lodash/mapKeys';
import { FETCH_PROJECTS, FETCH_PROJECT } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECT:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_PROJECTS:
      console.log('red proj: ', action.payload);
      return { ...state, ...mapKeys(action.payload, '_id') };
    default:
      return state;
  }
}
