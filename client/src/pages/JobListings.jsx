import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Riyadh",
    type: "Full-Time",
    description: "Work on modern UI using React and Tailwind.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CodeWorks",
    location: "Jeddah",
    type: "Part-Time",
    description: "Build scalable APIs using Node.js and Express.",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "InnovateX",
    location: "Remote",
    type: "Contract",
    description: "Develop full-stack apps with MERN stack.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Designify",
    location: "Riyadh",
    type: "Full-Time",
    description: "Create intuitive user experiences for web apps.",
  },
];

function JobListings() {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.keyword.toLowerCase()) &&
      (filters.location ? job.location === filters.location : true) &&
      (filters.type ? job.type === filters.type : true)
    );
  });

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-3xl font-bold text-green-300 mb-6">Job Listings</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          name="keyword"
          placeholder="Search by keyword..."
          value={filters.keyword}
          onChange={handleFilterChange}
          className="px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="px-3 py-2 bg-black border border-green-700 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">All Locations</option>
          <option value="Riyadh">Riyadh</option>
          <option value="Jeddah">Jeddah</option>
          <option value="Remote">Remote</option>
        </select>

        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="px-3 py-2 bg-black border border-green-700 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-900 border border-green-700 rounded-lg p-6 shadow cursor-pointer hover:border-green-500 transition"
            onClick={() => navigate(`/job/${job.id}`)}
          >
            <h2 className="text-xl font-bold text-green-300">{job.title}</h2>
            <p className="text-green-500">{job.company}</p>
            <p className="text-green-400 text-sm">
              {job.location} • {job.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListings;
