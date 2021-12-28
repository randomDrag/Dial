
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    username: "test_09",  //"default__user"
    userToken: null,
    userType: null
  },

  reducers: {

    LOGIN: (state, action) => {
      state.userToken = action.payload.userToken
    },

    LOGOUT: (state, action) => {
      state.userToken = null
      state.userType = null
    },

    MODIFY_USERTYPE:  (state, action) => {
      state.userType =  action.payload.userType
    },

  }
});




export const { LOGIN, LOGOUT, MODIFY_USERTYPE } = userSlice.actions;

// Selector
export const selectUserName = (state) => state.user.username;
export const selectUserToken = (state) => state.user.userToken;
export const selectUsertype = (state) => state.user.userType;

export default userSlice.reducer;