import { REGIS_FAIL, REGIS_START, REGIS_SUCCESS } from './../actions/index';


const initialState = {
    user:'none',
    error: '',
    LoggingIn: false,
    isLoggedIn: false
    
  };
  
  
  export const login = (state = initialState, action) => {
    switch (action.type) {
     
       case REGIS_START: 
        return {
          ...state,
          LoggingIn: false
        };
        
        case REGIS_SUCCESS: 
        return {
          ...state,
          LoggingIn: false,
          isLoggedIn: false,
          //user: 
        };
        
        case REGIS_FAIL: 
        return {
          ...state,
          LoggingIn: false,
          //error: 
        };
  
      default:
        return state;
    }
  };