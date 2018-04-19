import { FETCH_PROPERTIES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return action.payload;
    default:
      return state;
  }
}
