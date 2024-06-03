import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    admininfo: [],
  },

  reducers: {
    adduserInfo: (state, action) => {
      state.admininfo.push(action.payload);
    },
  },
});

export const { adduserInfo } = loginSlice.actions;

export default loginSlice.reducer;
