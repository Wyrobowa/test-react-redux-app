import { createSlice } from '@reduxjs/toolkit';
import commentsData from '../data/comments';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {},
  reducers: {
    getComments: (state) => {
      return commentsData;
    },
    addComment: (state, action) => {
      const { postId, author, comment } = action.payload;
      if (!state[postId]) {
        state[postId] = [];
      }
      state[postId].push({
        user: author,
        text: comment,
      });
    },
    removeComment: (state, action) => {
      const { postId, index } = action.payload;
      if (state[postId]) {
        state[postId].splice(index, 1);
      }
    },
  },
});

export const { getComments, addComment, removeComment } = commentsSlice.actions;
export default commentsSlice.reducer;

export const selectAllComments = (state) => state.comments;
