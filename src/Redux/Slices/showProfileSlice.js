import { createSlice } from "@reduxjs/toolkit";

const ShowUserProfile = {
  showUserProfile: false,
};

const showProfileSlice = createSlice({
  name: "showUsersProfile",
  initialState: ShowUserProfile,
  reducers: {
    showProfile: (state = ShowUserProfile) => {
      state.showUserProfile = true;
    },

    dontShowUserProfile: (state = ShowUserProfile) => {
      state.showUserProfile = false;
    },
  },
});

export const { showProfile, dontShowUserProfile } = showProfileSlice.actions;
export default showProfileSlice.reducer;
