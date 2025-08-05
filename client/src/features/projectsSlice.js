import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "DevDesk Collaboration Tool", status: "Planning" },
  { id: 2, title: "E-Commerce App", status: "In Progress" },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
