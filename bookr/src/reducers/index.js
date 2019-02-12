import { combineReducers } from 'redux';
import { login } from './loginReducer';

import { register } from './registerReducer';

import {books} from './books';
import { reviews } from './reviews';


export default combineReducers({
  login,
  register,
  books,
  reviews
});
