import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';
import commentsReducer from './features/commentsSlice';
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const setupStore = () => store;

export default setupStore;
