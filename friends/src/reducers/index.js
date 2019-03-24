
import { LOGIN_START } from "../actions";

const initialState = {
  friends: [],
  error: '',
  loggingIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: 
      return {
        ...state,
        loggingIn: true,
      }
    default:
      return state;
  }
};

export default reducer;
