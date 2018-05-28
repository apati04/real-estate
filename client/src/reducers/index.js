import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mapDataReducer from './map_data_reducer';
import auth from './auth';
import projectsReducer from './projects_reducer';
import postsInProjectReducer from './projectPostsReducer';
const rootReducer = combineReducers({
  auth,
  currentUser: currentUserReducer,
  mapData: mapDataReducer,
  form: formReducer,
  projects: projectsReducer,
  postsInProject: postsInProjectReducer
});

export default rootReducer;
