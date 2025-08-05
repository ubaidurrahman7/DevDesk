import React, { useState } from "react";

const dummyProjects = [
  {
    id: 1,
    title: "DevDesk Collaboration Tool",
    description:
      "A platform for developers to post jobs and collaborate on projects.",
    status: "Planning",
    contributors: ["Ubaid", "Ali"],
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "A MERN stack-based e-commerce platform.",
    status: "In Progress",
    contributors: ["Sara", "Omar"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio for showcasing projects.",
    status: "Completed",
    contributors: ["Ubaid"],
  },
];

function ViewProjects() {
  const [projects] = useState(dummyProjects);

  const groupedProjects = {
    Planning: projects.filter((p) => p.status === "Planning"),
    "In Progress": projects.filter((p) => p.status === "In Progress"),
    Completed: projects.filter((p) => p.status === "Completed"),
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-3xl font-bold text-green-300 mb-6">All Projects</h1>

      {Object.keys(groupedProjects).map((status) => (
        <div key={status} className="mb-10">
          <h2 className="text-2xl font-bold text-green-300 border-b border-green-700 pb-2 mb-4">
            {status}
          </h2>
          {groupedProjects[status].length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groupedProjects[status].map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 border border-green-700 rounded-lg p-6 shadow hover:border-green-500 transition"
                >
                  <h3 className="text-xl font-bold text-green-300">
                    {project.title}
                  </h3>
                  <p className="text-green-500 text-sm mb-2">
                    {project.description}
                  </p>
                  <p className="text-green-400 text-sm">
                    Contributors: {project.contributors.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-green-500 text-sm">
              No projects in this category.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ViewProjects;
