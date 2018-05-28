import axios from 'axios';
import * as types from './types';

export const fetchCurrentUserData = () => async dispatch => {
  const request = await axios.get('/api/current_user');
  const { data } = request;
  dispatch({ type: types.AUTH_SUCCESS, payload: data });
};

// PROJECT ACTION CREATORS
export const fetchProjects = () => async dispatch => {
  const projRes = await axios.get('/api/projects');
  dispatch({ type: types.FETCH_PROJECTS, payload: projRes.data });
};

export const createNewProject = (values, callback) => async dispatch => {
  const response = await axios.post('/api/projects', values);
  callback();
  dispatch({ type: types.FETCH_PROJECT, payload: response.data });
};

const requestProjectPosts = projectId => ({
  type: types.REQUEST_PROJECT_POSTS,
  projectId
});
const receiveProjectPosts = (projectId, data) => ({
  type: types.RECEIVE_PROJECT_POSTS,
  projectId,
  payload: data,
  receivedAt: Date.now()
});

const handleEmptyProjectPosts = projectId => ({
  type: types.HANDLE_EMPTY_PROJECT_POSTS,
  projectId,
  payload: {}
});

const fetchProjectPosts = projectId => dispatch => {
  dispatch(requestProjectPosts(projectId));
  return axios.get(`/api/projects/${projectId}`).then(({ data }) => {
    if (data.length === 0) {
      dispatch(handleEmptyProjectPosts(projectId));
    } else {
      dispatch(receiveProjectPosts(projectId, data));
    }
  });
};
const shouldFetchProjectPosts = (state, projectId) => {
  const posts = state.postsInProject[projectId];
  if (!posts) return true;
  if (posts.isFetching) return false;
};
export const fetchProjectPostsIfNeeded = projectId => (dispatch, getState) => {
  if (shouldFetchProjectPosts(getState(), projectId)) {
    return dispatch(fetchProjectPosts(projectId));
  }
};
export const submitNewBuilding = (
  values,
  uploadFile,
  location,
  callback
) => async dispatch => {
  let userImage = {};
  if (uploadFile !== null) {
    const awsConfig = await axios.get('/api/awsUpload');
    await axios.put(awsConfig.data.url, uploadFile, {
      headers: { 'Content-Type': uploadFile.type }
    });
    userImage.url = awsConfig.data.key;
  }

  const postBuilding = await axios.post('/api/building', {
    formValues: {
      ...values,
      userImage
    }
  });
  callback();
  if (location.shouldRedirect) {
    location.history.push(`/projects/${values._project}/overview`);
  }
  console.log(postBuilding, 'post');
  console.log(values, 'values');
  dispatch(fetchProjectPosts(values._project));
};
// ------
export const selectProjectPost = projectPost => ({
  type: types.SELECT_PROJECT_POST,
  projectPost
});

export const deleteProject = (projectId, message) => async dispatch => {
  const res = await axios.delete('/api/projects', {
    params: {
      projectId
    }
  });
  if (res.data === projectId) {
    dispatch({ type: types.DELETE_PROJECT, payload: res.data });
    message();
  }
};

export const deleteSelectedProperty = (
  { projectId, postId },
  history,
  message
) => async dispatch => {
  const del = await axios.delete('/api/building/delete', {
    params: { id: postId }
  });
  if (postId === del.data._id) {
    history.push(`/projects/${projectId}/overview`);
    dispatch({
      type: types.DELETE_SELECTED_PROPERTY,
      projectId: del.data._project,
      postId: del.data._id
    });
    message();
  }
};

const requestMapData = () => ({
  type: types.REQUEST_MAP_DATA
});
const receiveMapData = data => ({
  type: types.RECEIVE_MAP_DATA,
  payload: data
});
export const fetchMapData = (location, resetForm) => dispatch => {
  dispatch(requestMapData());
  return axios
    .get('/api/mapSearch/', {
      params: {
        location
      }
    })
    .then(({ data }) => {
      console.log(data);
      dispatch(receiveMapData(data));
    })
    .catch(error => console.log(error));
};
