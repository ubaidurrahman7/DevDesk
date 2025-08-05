import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ubaid Ur Rahman",
  email: "ubaid@example.com",
  joinedDate: "March 2024",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
