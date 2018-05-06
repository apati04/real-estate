import { FETCH_PROPERTIES, DELETE_SELECTED_PROPERTY } from '../actions/types';
const initialState = {
  buildings: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROPERTIES: {
      return { ...state, buildings: action.payload };
    }
    case DELETE_SELECTED_PROPERTY: {
      const { _id } = action.payload;
      return {
        ...state,
        buildings: state.buildings.filter(item => item._id !== _id)
      };
    }
    default:
      return state;
  }
}
