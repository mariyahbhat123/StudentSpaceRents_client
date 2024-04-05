import { createSlice } from "@reduxjs/toolkit";

const ownerDetails = {
  ownerD: {
    name: "",
    email: "",
    img: "",
  },
};

const ownerDataSlice = createSlice({
  name: "OWNER_DATA",
  initialState: ownerDetails,
  reducers: {
    ownerData: (state = ownerDetails, action) => {
      state.ownerD.name = action.payload.name;
      state.ownerD.email = action.payload.email;
      state.ownerD.img = action.payload.img;
    },
  },
});

export const { ownerData } = ownerDataSlice.actions;
export default ownerDataSlice.reducer;
