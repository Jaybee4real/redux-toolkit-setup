import {createSlice} from '@reduxjs/toolkit';
// import {
//   clearStoredToken,
//   clearLoginData,
// } from '../utils/auth';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated:false,
    userData: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userData = action.payload.userData;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      // clearStoredToken();
      // clearLoginData();
    },
  },
});

export default slice.reducer;
export const {saveTempUserData, logout, loginSuccess} = slice.actions;
