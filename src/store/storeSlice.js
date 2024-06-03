import { createSlice } from "@reduxjs/toolkit";
const storeSlice = createSlice({
  name: "store",
  initialState: {
    storedetails: {},
  },

  reducers: {
    getCurrntStoreInfo: (state, action) => {
      state.storedetails = action.payload;
    },
  },
});

export const { getCurrntStoreInfo } = storeSlice.actions;

export default storeSlice.reducer;
