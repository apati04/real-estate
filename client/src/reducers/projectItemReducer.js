import { SELECT_PROPERTY_ITEM } from '../actions/types';

const selectedProjectItem = (state = '', action) => {
  switch (action.type) {
    case SELECT_PROPERTY_ITEM:
      return action.propertyItem;
    default:
      return state;
  }
};

export default selectedProjectItem;
