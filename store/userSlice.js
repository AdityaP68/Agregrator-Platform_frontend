// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: null,
  token: null,
  refreshToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload.userData;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
