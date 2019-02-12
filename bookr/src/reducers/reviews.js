import { REVIEW_FAIL, REVIEW_START, REVIEW_SUCCESS } from './../actions/index';


const initialState = {
    reviews: [],
    error: '',
    gettingRev: false,
    
    // Array characters, Boolean fetching, null error.
  };
  
  
  export const reviews = (state = initialState, action) => {
    switch (action.type) {
     
       case REVIEW_START: 
        return {
          ...state,
          gettingRev: true
        };
        
        case REVIEW_SUCCESS: 
        return {
          ...state,
          gettingRev: false,
          reviews: action.payload 
        };
        
        case REVIEW_FAIL: 
        return {
          ...state,
          gettingRev: false,
          error: action.payload 
        };
  
      default:
        return state;
    }
  };