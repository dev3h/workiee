import { createSlice } from "@reduxjs/toolkit";
const initState = {
  account: null,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState: initState,
  reducers: {
    createAccount: (state, action) => {
      state.account = action.payload;
    },
    logout: (state, action) => {
      state.account = null;
    },
  },
});
export const { createAccount, logout } = authSlice.actions;
export default authSlice.reducer;
