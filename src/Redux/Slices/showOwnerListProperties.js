import { createSlice } from "@reduxjs/toolkit";
const showOwnerProperties = {
  showOwnerProperty: false,
};

const showOwnerListProperties = createSlice({
  name: "SHOW_PROFILE_MODAL",
  initialState: showOwnerProperties,

  reducers: {
    showOwnerProperty: (state) => {
      state.showOwnerProperty = true;
    },
    dontShowOwnerProperty: (state) => {
      state.showOwnerProperty = false;
    },
  },
});

export const { showOwnerProperty, dontShowOwnerProperty } =
  showOwnerListProperties.actions;

export default showOwnerListProperties.reducer;
