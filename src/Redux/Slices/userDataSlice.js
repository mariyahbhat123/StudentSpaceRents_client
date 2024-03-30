import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "tenantData",
  initialState: {
    tenantData: [{}],
  },
  reducers: {
    tenantUserData: (state, action) => {
      state.tenantData = action.payload;
    },
  },
});

export const { tenantUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
