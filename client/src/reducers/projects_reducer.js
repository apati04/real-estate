import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';
import {
  FETCH_PROJECTS,
  FETCH_PROJECT,
  DELETE_PROJECT
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECT:
      const proj = action.payload;
      return { ...state, [proj._id]: proj };
    case FETCH_PROJECTS:
      return { ...state, ...mapKeys(action.payload, '_id') };
    case DELETE_PROJECT:
      console.log(action.payload);
      console.log('state: ', state);
      return omit(state, action.payload);
    default:
      return state;
  }
}
