import { Routes, Route } from "react-router-dom";

// Page imports from `pages/`
import Dashboard from "./pages/Dashboard";
import JobListings from "./pages/JobListings";
import Learning from "./pages/Learning";
import AllProjects from "./pages/ViewProjects";
import WeeklyGoals from "./pages/WeeklyGoals";
import NewProject from "./pages/NewProject";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layouts/layout";
import AppliedJobs from "./pages/AppliedJobs";
import JobDetails from "./pages/JobDetails";
import NewJob from "./pages/NewJob";
import ViewProjects from "./pages/ViewProjects";
import Profile from "./pages/Profile";
import Sittings from "./pages/Sittings";
function App() {
  return (
    <Routes>
      {/* Standalone routes (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* All other pages go inside Layout */}
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} /> {/* "/" renders Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/applied-jobs" element={<AppliedJobs />} />
        <Route path="/projects" element={<ViewProjects />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/weekly-goals" element={<WeeklyGoals />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/job/new" element={<NewJob />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Sittings />} />
      </Route>
    </Routes>
  );
}

export default App;
