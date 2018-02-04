import axios from "axios";
import convert from "xml-js";

import { FETCH_CURRENT_USER_DATA, FETCH_PROPERTY_DATA, FETCH_MAP_DATA } from "./types";

const ZILLOW_URL = "https://www.zillow.com/webservice/GetDeepSearchResults.htm";
const ZILLOW_KEY = "X1-ZWz18sa4dxcwln_8jmj2";

const MAPBOX_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";
const MAPBOX_TOKEN = "pk.eyJ1IjoiaXNhYWMxMTA0IiwiYSI6ImNqZDgwYjJ5MTI1dXUycWw5M3E5bnpldDcifQ.tRpvJ9X5wq7ke4t9KGd4yg";

export const fetchCurrentUserData = () => async dispatch => {
  const request = await axios.get("/api/current_user");
  const { data } = request;
  dispatch({ type: FETCH_CURRENT_USER_DATA, payload: data });
}

export const fetchPropertyData = (address, citystatezip) => async dispatch => {
  const request = await axios.get(`${ZILLOW_URL}?zws-id=${ZILLOW_KEY}&address=${address}&citystatezip=${citystatezip}`);
  const { data } = request;
  const result = JSON.parse(convert.xml2json(data, { compact: true }));
  dispatch({ type: FETCH_PROPERTY_DATA, payload: result });
}

export const fetchMapData = location => async dispatch => {
  const request = await axios.get(`${MAPBOX_URL}/${location}.json?access_token=${MAPBOX_TOKEN}`);
  const { data } = request;
  dispatch({ type: FETCH_MAP_DATA, payload: data });
}
