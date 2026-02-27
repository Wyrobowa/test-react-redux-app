import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

interface AuthState {
  user: { name: string } | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null, // { name: 'Ania' }
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
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

export const selectAuth = (state: RootState) => state.auth;
