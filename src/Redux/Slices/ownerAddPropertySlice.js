import { createSlice } from "@reduxjs/toolkit";

const showOwnerAddPro = {
  showOrNoOwnerAddPro: false,
};

const ownerAddPropertySlice = createSlice({
  name: "SHOW_OWNER_ADD_PROPERTY",
  initialState: showOwnerAddPro,

  reducers: {
    showOwnerAddProperty: (state) => {
      state.showOrNoOwnerAddPro = true;
    },

    dontShowOwnerAddProperty: (state) => {
      state.showOrNoOwnerAddPro = false;
    },
  },
});

export const { showOwnerAddProperty, dontShowOwnerAddProperty } =
  ownerAddPropertySlice.actions;
export default ownerAddPropertySlice.reducer;
