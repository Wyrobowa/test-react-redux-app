import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // { name: 'Ania' }
    isAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      state.user = { name: 'Ania' };
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectAuth = (state) => state.auth;
