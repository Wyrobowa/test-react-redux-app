import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';
import commentsReducer from './features/commentsSlice';

const setupStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      comments: commentsReducer,
    },
  });
}

export default setupStore;
