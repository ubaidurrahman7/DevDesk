import React, { useState } from "react";

const tutorialsData = [
  {
    id: 1,
    title: "React Basics",
    description: "Understand components, props, and state management in React.",
    link: "https://react.dev/learn",
  },
  {
    id: 2,
    title: "Node.js Crash Course",
    description: "Learn the fundamentals of Node.js for backend development.",
    link: "https://nodejs.org/en/docs",
  },
  {
    id: 3,
    title: "Tailwind CSS Guide",
    description: "Build modern and responsive UIs using Tailwind CSS.",
    link: "https://tailwindcss.com/docs",
  },
];

function Learning() {
  const [completed, setCompleted] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-3xl font-bold text-green-300 mb-6">
        Learning Resources
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorialsData.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-gray-900 border border-green-700 rounded-lg p-6 shadow hover:border-green-500 transition"
          >
            <h2 className="text-xl font-bold text-green-300">
              {tutorial.title}
            </h2>
            <p className="text-green-500 text-sm mb-4">
              {tutorial.description}
            </p>

            <a
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-400 hover:underline mb-4"
            >
              View Tutorial
            </a>

            <div className="flex gap-3">
              <button
                onClick={() => toggleComplete(tutorial.id)}
                className={`px-3 py-1 rounded border transition font-bold ${
                  completed.includes(tutorial.id)
                    ? "bg-green-700 text-black border-green-500"
                    : "bg-black text-green-300 border-green-700 hover:bg-green-900"
                }`}
              >
                {completed.includes(tutorial.id)
                  ? "Completed"
                  : "Mark as Complete"}
              </button>

              <button
                onClick={() => toggleBookmark(tutorial.id)}
                className={`px-3 py-1 rounded border transition font-bold ${
                  bookmarked.includes(tutorial.id)
                    ? "bg-green-700 text-black border-green-500"
                    : "bg-black text-green-300 border-green-700 hover:bg-green-900"
                }`}
              >
                {bookmarked.includes(tutorial.id) ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show Bookmarked Tutorials */}
      {bookmarked.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-green-300 border-b border-green-700 pb-2 mb-4">
            Bookmarked Tutorials
          </h2>
          <ul className="list-disc pl-6 text-green-400">
            {tutorialsData
              .filter((t) => bookmarked.includes(t.id))
              .map((t) => (
                <li key={t.id}>{t.title}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Learning;
