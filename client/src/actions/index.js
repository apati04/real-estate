import axios from 'axios';
import convert from 'xml-js';

import {
  FETCH_CURRENT_USER_DATA,
  FETCH_PROPERTY_DATA,
  FETCH_MAP_DATA,
  LOADING_DATA,
  RESET_PROP_DATA
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

export const submitNewBuilding = (values, history) => async dispatch => {
  console.log('vals: ', values, 'history', history);
  const postBuilding = await axios.post('/api/building', values);
  const { data } = postBuilding;
  history.push('/projects');
  dispatch({ type: FETCH_CURRENT_USER_DATA, payload: data });
};
