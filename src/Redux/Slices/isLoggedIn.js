import { createSlice } from "@reduxjs/toolkit";

const LoggedIn = {
  isLogIn: false,
};

const isLoggedIn = createSlice({
  name: "isLoggedIn",
  initialState: LoggedIn,
  reducers: {
    isLogged: (state = LoggedIn) => {
      state.isLogIn = true;
    },
    isNotLogged: (state = LoggedIn) => {
      state.isLogIn = false;
    },
  },
});

export const { isLogged, isNotLogged } = isLoggedIn.actions;
export default isLoggedIn.reducer;
