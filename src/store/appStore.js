import { configureStore, createStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import storeSlice from "./storeSlice";

export const appstore = configureStore({
  reducer: {
    login: loginSlice,
    store: storeSlice,
  },
});
