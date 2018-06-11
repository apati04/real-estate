import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mapDataReducer from './mapDataReducer';
import currentUserReducer from './currentUserReducer';
import projectsReducer from './projectsReducer';
import postsInProjectReducer from './projectPostsReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  mapData: mapDataReducer,
  form: formReducer,
  projects: projectsReducer,
  postsInProject: postsInProjectReducer
});

export default rootReducer;
