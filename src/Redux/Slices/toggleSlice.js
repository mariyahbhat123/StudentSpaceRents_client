import { createSlice } from "@reduxjs/toolkit";

const states = {
  active: false,
};
const toggleSlice = createSlice({
  name: "toggle",
  initialState: states,

  reducers: {
    toggleOn: (state = states) => {
      state.active = true;
    },
    toggleOff: (state = states) => {
      state.active = false;
    },
  },
});

export const { toggleOn, toggleOff } = toggleSlice.actions;
export default toggleSlice.reducer;
