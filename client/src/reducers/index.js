import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mapDataReducer from './mapDataReducer';
import currentUserReducer from './currentUserReducer';
import projectsReducer from './projectsReducer';
import postsInProjectReducer from './projectPostsReducer';
import validateLocationReducer from './validateLocationReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  mapData: mapDataReducer,
  form: formReducer,
  projects: projectsReducer,
  postsInProject: postsInProjectReducer,
  validateLocation: validateLocationReducer
});

export default rootReducer;
