import { NEWBOOK_FAIL, NEWBOOK_START, NEWBOOK_SUCCESS } from './../actions/index';


const initialState = {
    book: [],
    error: '',
    makingNewBook: false,
    madeNewBook: false
    
   
  };
  
  
  export const newbook = (state = initialState, action) => {
    switch (action.type) {
     
       case NEWBOOK_START: 
        return {
          ...state,
          makingNewBook: true
        };
        
        case NEWBOOK_SUCCESS: 
        return {
          ...state,
          makingNewBook: false,
          book: action.payload,
          madeNewBook: true
        };
        
        case NEWBOOK_FAIL: 
        return {
          ...state,
          gettingBooks: false,
          error: action.payload 
        };
  
      default:
        return state;
    }
  };