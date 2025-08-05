import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find((j) => j.id === parseInt(id));

  if (!job)
    return <div className="text-center text-red-500">Job not found</div>;

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 rounded shadow transition border border-green-500"
      >
        ← Back to Jobs
      </button>

      <h1 className="text-3xl font-bold text-green-300 mb-2">{job.title}</h1>
      <p className="text-green-500 mb-1">{job.company}</p>
      <p className="text-green-400 mb-4">
        {job.location} • {job.type}
      </p>
      <p className="text-green-300">{job.description}</p>
    </div>
  );
}

export default JobDetails;
