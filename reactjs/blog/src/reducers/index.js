import { combineReducers } from 'redux';
import postReducers from './postsReducer';

export default combineReducers({
  post: postReducers
});