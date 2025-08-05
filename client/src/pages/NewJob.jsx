import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewJob({ onAddJob }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.company || !form.description) {
      alert("Please fill in all required fields.");
      return;
    }

    const newJob = {
      id: Date.now(),
      ...form,
    };

    if (onAddJob) {
      onAddJob(newJob); // Pass job to parent or save in context
    }

    alert("Job posted successfully!");
    navigate("/jobs"); // Redirect to Job Listings
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-3xl font-bold text-green-300 mb-6">Post a New Job</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-green-700 rounded-lg p-6 max-w-2xl mx-auto shadow"
      >
        {/* Job Title */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Job Title *</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., Frontend Developer"
            required
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Company *</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., TechCorp"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., Riyadh"
          />
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Job Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Salary</label>
          <input
            type="text"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., 7000 SAR"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-green-300 mb-1">Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Describe the job role and responsibilities"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-600 text-black font-bold py-2 rounded shadow transition border border-green-500"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default NewJob;
