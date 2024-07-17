import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    username: null,
    id: null,
    email: null,
  },
  reducers: {
    LOGIN: (state, action) => {
      state.username = action.payload.username;
      state.profile = action.payload.profile;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    LOGOUT: (state, action) => {
      state.username = null;
      state.profile = null;
      state.id = null;
      state.email = null;
    },
  },
});
export const { LOGIN, LOGOUT } = userSlice.actions;
export default userSlice.reducer;
