import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../redux/jobsSlice";
import projectsReducer from "../redux/projectsSlice";
import userReducer from "../redux/userSlice";
import notificationsReducer from "../redux/notificationsSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    projects: projectsReducer,
    user: userReducer,
    notifications: notificationsReducer,
  },
});

export default store;
