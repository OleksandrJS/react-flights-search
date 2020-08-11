/** @format */

import { combineReducers } from 'redux';
import { loaderReducer } from './loaderReducer';
import { postsReducer } from './postReducer';

export const rootReducer = combineReducers({
  card: loaderReducer,
  post: postsReducer,
});
