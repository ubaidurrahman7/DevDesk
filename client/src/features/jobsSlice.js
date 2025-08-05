import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-Time" },
  { id: 2, title: "Backend Developer", location: "Riyadh", type: "Contract" },
];

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;
