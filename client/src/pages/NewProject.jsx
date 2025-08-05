import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewProject({ onAddProject }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    contributors: [],
  });

  const [contributor, setContributor] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddContributor = () => {
    if (contributor.trim() !== "") {
      setForm({
        ...form,
        contributors: [...form.contributors, contributor],
      });
      setContributor("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.status) {
      alert("Please fill in all required fields.");
      return;
    }

    const newProject = {
      id: Date.now(),
      ...form,
    };

    if (onAddProject) {
      onAddProject(newProject);
    }

    alert("Project created successfully!");
    navigate("/projects");
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-3xl font-bold text-green-300 mb-6">
        Create New Project
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-green-700 rounded-lg p-6 max-w-2xl mx-auto shadow"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Project Title *</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g., DevDesk Collaboration Tool"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Describe the project goals and features"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-green-300 mb-1">Status *</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-green-700 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          >
            <option value="">Select Status</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Add Contributors */}
        <div className="mb-6">
          <label className="block text-green-300 mb-2">Contributors</label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={contributor}
              onChange={(e) => setContributor(e.target.value)}
              placeholder="Enter contributor name"
              className="flex-1 px-3 py-2 bg-black border border-green-700 rounded text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              onClick={handleAddContributor}
              className="bg-green-700 hover:bg-green-600 text-black font-bold px-4 rounded shadow transition border border-green-500"
            >
              Add
            </button>
          </div>
          <ul className="text-green-400 text-sm">
            {form.contributors.map((c, idx) => (
              <li key={idx}>• {c}</li>
            ))}
          </ul>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-600 text-black font-bold py-2 rounded shadow transition border border-green-500"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}

export default NewProject;
