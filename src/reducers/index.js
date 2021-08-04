import { combineReducers } from 'redux';

// Reducers
import comments from './commentsReducer';
import post from './postReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  comments,
  post,
  posts,
});

export default rootReducer;
