import { createSlice } from '@reduxjs/toolkit';
import postsData from '../data/posts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    getPosts: (state) => {
      return postsData;
    },
    incrementLikes: (state, action) => {
      const index = action.payload;
      state[index].likes += 1;
    },
  },
});

export const { getPosts, incrementLikes } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;
