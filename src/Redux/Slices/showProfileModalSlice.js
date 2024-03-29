import { createSlice } from "@reduxjs/toolkit";
const showProfileModal = {
  showProMod: false,
};

const showProfileModalSlice = createSlice({
  name: "SHOW_PROFILE_MODAL",
  initialState: showProfileModal,

  reducers: {
    showProfileUser: (state = showProfileModal) => {
      state.showProMod = true;
    },
    dontShowProfileUser: (state = showProfileModal) => {
      state.showProMod = false;
    },
  },
});

export const { showProfileUser, dontShowProfileUser } =
  showProfileModalSlice.actions;
export default showProfileModalSlice.reducer;
