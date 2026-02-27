import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import postsData from '../data/posts';
import { RootState } from '../configureStore';

export interface Post {
  code: string;
  caption: string;
  likes: number;
  id: string;
  display_src: string;
}

const initialState: Post[] = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: () => {
      return postsData;
    },
    incrementLikes: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const post = state[index];
      if (post) {
        post.likes += 1;
      }
    },
  },
});

export const { getPosts, incrementLikes } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts;
