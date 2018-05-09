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
  DELETE_SELECTED_PROPERTY
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

export const submitNewBuilding = (
  values,
  uploadFile,
  history
) => async dispatch => {
  const upload = await axios.get('/api/awsUpload');
  const awsRequest = await axios.put(upload.data.url, uploadFile, {
    headers: {
      'Content-Type': uploadFile.type
    }
  });
  const postBuilding = await axios.post('/api/building', {
    ...values,
    imageUrl: upload.data.key
  });
  history.push('/properties');
  dispatch({ type: FETCH_USER_PROPERTIES, payload: postBuilding.data });
};

export const fetchUserProperties = () => async dispatch => {
  const response = await axios.get('/api/building');
  dispatch({ type: FETCH_USER_PROPERTIES, payload: response.data });
};

export const deleteSelectedProperty = (value, history) => async dispatch => {
  const deleteResponse = await axios.delete(`/api/building/delete/${value}`);
  const { data } = deleteResponse;
  dispatch({ type: DELETE_SELECTED_PROPERTY, payload: data });
};

export const fetchProjects = () => async dispatch => {
  const projRes = await axios.get('/api/projects');

  dispatch({ type: FETCH_PROEJCTS, payload: projRes.data });
};

export const fetchProject = id => async dispatch => {
  const projRes = await axios.get(`/api/projects/${id}`);

  dispatch({ type: FETCH_PROEJCTS, payload: projRes.data });
};
