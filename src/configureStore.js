import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';
import commentsReducer from './features/commentsSlice';
import authReducer from './features/authSlice';

const setupStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      comments: commentsReducer,
      auth: authReducer,
    },
  });
}

export default setupStore;
