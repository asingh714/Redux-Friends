import {
  USER_UNAUTHORIZED,
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DELETE_START,
  DELETE_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  error: "",
  errorStatusCode: null,
  loggingIn: false,
  token: localStorage.getItem("token"),
  fetchingFriends: false,
  deletingFriend: false
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
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingFriends: false
      };
    case DELETE_START:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        error: "",
        errorStatusCode: null,
        friends: action.payload
      };
    case USER_UNAUTHORIZED:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingFriends: false
      };
    default:
      return state;
  }
};

export default reducer;
