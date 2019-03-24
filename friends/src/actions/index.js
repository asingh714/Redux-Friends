import axios from "axios";

import { history } from "../helpers/history";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("http://localhost:5000/api/login", credentials)
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
      history.push("/protected")
    })
    .catch();
};
