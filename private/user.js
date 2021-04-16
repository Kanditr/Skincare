import { createSelector, createSlice } from "@reduxjs/toolkit";

// Reducer
const slice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
  },
  reducers: {
    userActived: (user, action) => {
      user.userName = action.payload.userName;
      user.userEmail = action.payload.userEmail;
    },
    userLoggedOut: (user, action) => {
      user.userName = null;
      user.userEmail = null;
    },
  },
});

export const { userActived, userLoggedOut } = slice.actions;
export default slice.reducer;

// Selector
export const getUserName = createSelector(
  (state) => state.auth.user,
  (user) => user.userName
);

export const getUserEmail = createSelector(
  (state) => state.auth.user,
  (user) => user.userEmail
);
