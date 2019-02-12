import { combineReducers } from 'redux';
import { login } from './loginReducer';

import { register } from './registerReducer';

import {books} from './books';

export default combineReducers({
  login,
  register,
  books
});
