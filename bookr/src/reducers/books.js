import { GET_FAIL, GET_START, GET_SUCCESS } from './../actions/index';


const initialState = {
    books: [],
    error: '',
    gettingBooks: false,
    
    // Array characters, Boolean fetching, null error.
  };
  
  
  export const books = (state = initialState, action) => {
    switch (action.type) {
     
       case GET_START: 
        return {
          ...state,
          gettingBooks: true
        };
        
        case GET_SUCCESS: 
        return {
          ...state,
          gettingBooks: false,
          books: action.payload 
        };
        
        case GET_FAIL: 
        return {
          ...state,
          gettingBooks: false,
          error: action.payload 
        };
  
      default:
        return state;
    }
  };