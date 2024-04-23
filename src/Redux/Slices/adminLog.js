import { createSlice } from "@reduxjs/toolkit";

const adminIsLogged = {
  isLogged: false,
};

const adminLog = createSlice({
  name: "adminIsLoggedIn",
  initialState: adminIsLogged,
  reducers: {
    adminIsLoggedIn: (state) => {
      state.isLogged = true;
    },
    adminIsNotLogged: (state) => {
      state.isLogged = false;
    },
  },
});

export const { adminIsLoggedIn, adminIsNotLogged } = adminLog.actions;
export default adminLog.reducer;
