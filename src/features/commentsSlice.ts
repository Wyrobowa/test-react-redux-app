import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import commentsData from '../data/comments';
import { RootState } from '../configureStore';

export interface Comment {
  user: string;
  text: string;
}

export interface CommentsState {
  [key: string]: Comment[];
}

const initialState: CommentsState = {};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: () => {
      return commentsData;
    },
    addComment: (state, action: PayloadAction<{ postId: string; author: string; comment: string }>) => {
      const { postId, author, comment } = action.payload;
      if (!state[postId]) {
        state[postId] = [];
      }
      state[postId]?.push({
        user: author,
        text: comment,
      });
    },
    removeComment: (state, action: PayloadAction<{ postId: string; index: number }>) => {
      const { postId, index } = action.payload;
      const postComments = state[postId];
      if (postComments) {
        postComments.splice(index, 1);
      }
    },
  },
});

export const { getComments, addComment, removeComment } = commentsSlice.actions;
export default commentsSlice.reducer;

export const selectAllComments = (state: RootState) => state.comments;
