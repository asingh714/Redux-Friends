import { LOGIN_START, LOGIN_SUCCESS, FETCH_DATA_START } from "../actions";

const initialState = {
  friends: [],
  error: "",
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
      }
    case FETCH_DATA_START: {
      return {
        ...state,
        fetchingFriends: true, 
      }
    }
    default:
      return state;
  }
};

export default reducer;
