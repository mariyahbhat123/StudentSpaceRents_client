import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../Slices/toggleSlice";
import isLoggedIn from "../Slices/isLoggedIn";
import showProfileSlice from "../Slices/showProfileSlice";
import showProfileModalSlice from "../Slices/showProfileModalSlice";
import userDataSlice from "../Slices/userDataSlice";
import ownerIsLogged from "../Slices/ownerIsLogged";

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    isLoggedIn: isLoggedIn,
    showUsersProfile: showProfileSlice,
    showProfileModal: showProfileModalSlice,
    tenantDataSlice: userDataSlice,
    ownerLogOrNot: ownerIsLogged,
  },
});
