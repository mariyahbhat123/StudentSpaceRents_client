import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../Slices/toggleSlice";
import isLoggedIn from "../Slices/isLoggedIn";

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    isLoggedIn: isLoggedIn,
  },
});
