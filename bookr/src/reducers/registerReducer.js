import { REGIS_FAIL, REGIS_START, REGIS_SUCCESS } from './../actions/index';


const initialState = {
    user:'none',
    error: '',
    registering: false,
    isRegistered: false
    
  };
  
  
  export const register = (state = initialState, action) => {
    switch (action.type) {
     
       case REGIS_START: 
        return {
          ...state,
          registering: true
        };
        
        case REGIS_SUCCESS: 
        return {
          ...state,
          registering: false,
          isRegistered: true,
          //user: 
        };
        
        case REGIS_FAIL: 
        return {
          ...state,
          registering: false,
          //error: 
        };
  
      default:
        return state;
    }
  };