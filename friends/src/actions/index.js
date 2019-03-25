import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
    })
    .catch();
};
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START })
  axios.get("http://localhost:5000/api/friends")
  .then(response => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data })
  })
  .catch(error => {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.response })
  })
}