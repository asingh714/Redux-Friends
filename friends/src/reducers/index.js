import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  error: "",
  errorStatusCode: null,
  loggingIn: false,
  token: localStorage.getItem("token"),
  fetchingFriends: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingFriends: true
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingFriends:false,
      }
    default:
      return state;
  }
};

export default reducer;
