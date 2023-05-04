// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  refreshToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens: (state, action) => {
      console.log("setTokens action payload:", action.payload);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    testAction: (state, action) => {
      console.log("Test action dispatched");
    },
  },
});

export const { setTokens, testAction } = userSlice.actions;
export default userSlice.reducer;
