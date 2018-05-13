import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import propertyDataReducer from './property_data_reducer';
import propertyImgDataReducer from './property_img_data_reducer';
import mapDataReducer from './map_data_reducer';
import currentUserReducer from './current_user_reducer';
import UserPropertiesReducer from './user_properties_reducer';
import projectsReducer from './projects_reducer';
import { REQUEST_PROJECT_POSTS, RECEIVE_PROJECT_POSTS } from '../actions/types';
const posts = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PROJECT_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_PROJECT_POSTS:
      console.log('receive: line 23: ', action);
      return {
        ...state,
        isFetching: false,
        items: action.payload,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

const postsByProject = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECT_POSTS:
    case REQUEST_PROJECT_POSTS:
      return {
        ...state,
        [action.projectId]: posts(state[action.projectId], action)
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userProperties: UserPropertiesReducer,
  currentUser: currentUserReducer,
  propData: propertyDataReducer,
  imgData: propertyImgDataReducer,
  mapData: mapDataReducer,
  form: formReducer,
  projects: projectsReducer,
  postsInProject: postsByProject
});

export default rootReducer;
