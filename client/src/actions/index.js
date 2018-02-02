import axios from "axios";
import { FETCH_CURRENT_USER_DATA } from "./types";

export const fetchCurrentUserData = () => async dispatch => {
  const request = await axios.get("/api/current_user");
  const { data } = request;
  dispatch({ type: FETCH_CURRENT_USER_DATA, payload: data });
}
