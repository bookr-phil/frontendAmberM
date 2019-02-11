
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from './../actions/index';


const initialState = {
    user:'none',
    error: '',
    LoggingIn: false,
    isLoggedIn: false
    // Array characters, Boolean fetching, null error.
  };
  
  
  export const login = (state = initialState, action) => {
    switch (action.type) {
     
       case LOGIN_START: 
        return {
          ...state,
          LoggingIn: true
        };
  
  
  
      default:
        return state;
    }
  };
  
  