import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, message: "New job posted: Frontend Developer", read: false },
  { id: 2, message: "You were added to a new project", read: false },
];

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const notification = state.find((n) => n.id === action.payload);
      if (notification) notification.read = true;
    },
    dismissNotification: (state, action) => {
      return state.filter((n) => n.id !== action.payload);
    },
    addNotification: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { markAsRead, dismissNotification, addNotification } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
