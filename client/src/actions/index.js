import axios from 'axios';
import convert from 'xml-js';

import {
  FETCH_CURRENT_USER_DATA,
  FETCH_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROPERTY_DATA,
  FETCH_PROPERTY_IMG,
  FETCH_MAP_DATA,
  LOADING_DATA,
  RESET_PROP_DATA,
  FETCH_USER_PROPERTIES,
  FETCH_USER_PROPERTY,
  DELETE_SELECTED_PROPERTY,
  REQUEST_PROJECT_POSTS,
  RECEIVE_PROJECT_POSTS,
  SELECT_PROJECT_POST
} from './types';
import keys from '../config/keys';

export const fetchCurrentUserData = () => async dispatch => {
  const request = await axios.get('/api/current_user');
  const { data } = request;
  dispatch({ type: FETCH_CURRENT_USER_DATA, payload: data });
};

export const fetchPropertyData = (address, citystatezip) => async dispatch => {
  const request = await axios.get(
    `https://cors-anywhere.herokuapp.com/${keys.zillowUrl}?zws-id=${
      keys.zillowKey
    }&address=${address}&citystatezip=${citystatezip}`
  );
  const { data } = request;
  const result = JSON.parse(convert.xml2json(data, { compact: true }));

  dispatch({ type: FETCH_PROPERTY_DATA, payload: result });
};

export const fetchImgData = zpid => async dispatch => {
  const request = await axios.get(
    `https://cors-anywhere.herokuapp.com/${keys.zillowImgUrl}?zws-id=${
      keys.zillowKey
    }&zpid=${zpid}`
  );
  const { data } = request;
  const result = JSON.parse(convert.xml2json(data, { compact: true }));
  dispatch({ type: FETCH_PROPERTY_IMG, payload: result });
};

export const fetchMapData = location => async dispatch => {
  const request = await axios.get(
    `https://cors-anywhere.herokuapp.com/${
      keys.mapboxUrl
    }/${location}.json?access_token=${keys.mapboxToken}`
  );
  const { data } = request;
  dispatch({ type: FETCH_MAP_DATA, payload: data });
};

export const loadingData = () => {
  return {
    type: LOADING_DATA,
    payload: true
  };
};

export const resetPropData = () => {
  return {
    type: RESET_PROP_DATA,
    payload: {}
  };
};

export const fetchUserProperties = _id => async dispatch => {
  const response = await axios.get(`/api/projects/${_id}`);

  dispatch({ type: FETCH_USER_PROPERTIES, payload: response.data });
};

export const deleteSelectedProperty = (value, history) => async dispatch => {
  const deleteResponse = await axios.delete(`/api/building/delete/${value}`);
  const { data } = deleteResponse;
  dispatch({ type: DELETE_SELECTED_PROPERTY, payload: data });
};

// PROJECT ACTION CREATORS
export const fetchProjects = () => async dispatch => {
  const projRes = await axios.get('/api/projects');
  dispatch({ type: FETCH_PROJECTS, payload: projRes.data });
};

export const fetchProject = id => async dispatch => {
  const projRes = await axios.get(`/api/projects/${id}`);
  dispatch({ type: FETCH_PROJECT, payload: projRes.data });
};

export const createNewProject = (values, callback) => async dispatch => {
  const response = await axios.post('/api/projects', values);
  callback();
  dispatch({ type: FETCH_PROJECT, payload: response.data });
};

const requestProjectPosts = projectId => ({
  type: REQUEST_PROJECT_POSTS,
  projectId
});
const receiveProjectPosts = (projectId, data) => ({
  type: RECEIVE_PROJECT_POSTS,
  projectId,
  payload: data,
  receivedAt: Date.now()
});

const fetchProjectPosts = projectId => dispatch => {
  dispatch(requestProjectPosts(projectId));
  return axios.get(`/api/projects/${projectId}`).then(({ data }) => {
    dispatch(receiveProjectPosts(projectId, data));
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
  history,
  callback
) => async dispatch => {
  let imageUrl;
  if (uploadFile !== null) {
    const awsConfig = await axios.get('/api/awsUpload');
    await axios.put(awsConfig.data.url, uploadFile, {
      headers: { 'Content-Type': uploadFile.type }
    });
    imageUrl = awsConfig.data.key;
  } else {
    imageUrl = 'http://via.placeholder.com/300/4298f4/e7e7e7?text=Nein+Image';
  }

  const postBuilding = await axios.post('/api/building', {
    ...values,
    imageUrl
  });
  callback();
  history.push(`/projects/${values._project}/overview`);
  dispatch(fetchProjectPosts(values._project));
};

export const selectProjectPost = projectPost => ({
  type: SELECT_PROJECT_POST,
  projectPost
});
