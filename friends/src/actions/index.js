import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";


export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START })
  axios.post("http://localhost:5000/api/login", credentials)
  .then(response => {
    dispatch({ type: LOGIN_SUCCESS,  })
  })
  .catch()
}