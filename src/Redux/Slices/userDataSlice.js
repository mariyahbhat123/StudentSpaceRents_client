import { createSlice } from "@reduxjs/toolkit";

const tenantData = {
  tenantD: {
    name: "",
    email: "",
    gender: "",
    img: "",
  },
};
const userDataSlice = createSlice({
  name: "tenantData",
  initialState: tenantData,
  reducers: {
    tenantUserData: (state = tenantData, action) => {
      state.tenantD.name = action.payload.name;
      state.tenantD.email = action.payload.email;
      state.tenantD.gender = action.payload.gender;
      state.tenantD.img = action.payload.img;
    },
  },
});

export const { tenantUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
