import { createSlice } from "@reduxjs/toolkit";

const ownerIsLoggedOrNot = {
  ownerIsLog: false,
};

const ownerIsLogged = createSlice({
  name: "ownerIsLoggedOrNot",
  initialState: ownerIsLoggedOrNot,
  reducers: {
    ownerLoggedIn: (state) => {
      state.ownerIsLog = true;
    },

    ownerNotLogged: (state) => {
      state.ownerIsLog = false;
    },
  },
});

export const { ownerLoggedIn, ownerNotLogged } = ownerIsLogged.actions;
export default ownerIsLogged.reducer;
