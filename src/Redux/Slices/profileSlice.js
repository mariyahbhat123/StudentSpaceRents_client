import { createSlice } from "@reduxjs/toolkit";

const showProfileOrNot = {
  showOrNoProf: false,
};

const profileSlice = createSlice({
  name: "SHOW_PROFILE",
  initialState: showProfileOrNot,

  reducers: {
    showProfile: (state) => {
      state.showOrNoProf = true;
    },

    dontShowProfile: (state) => {
      state.showOrNoProf = false;
    },
  },
});

export const { showProfile, dontShowProfile } = profileSlice.actions;
export default profileSlice.reducer;
