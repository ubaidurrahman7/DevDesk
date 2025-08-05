import "../pages/styles.css";

function Dashboard() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="bg-black border-2 border-green-700 rounded-lg shadow-lg p-8 w-full max-w-4xl mt-10">
        <h1 className="text-3xl font-mono text-green-400 mb-4">
          Welcome, Developer!
        </h1>
        <p className="text-green-300 font-mono mb-8">
          This is your dashboard. Start building something awesome.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Job Section */}
          <div
            id="new-job"
            className="bg-gray-900 border border-green-700 rounded-lg p-6 flex flex-col items-start shadow"
          >
            <h2 className="text-lg font-mono text-green-300 mb-2">New Job</h2>
            <p className="text-green-400 mb-4 text-sm">
              Post a new job opportunity for developers.
            </p>
            <button className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 rounded shadow transition border border-green-500 cursor-pointer">
              Post Job
            </button>
          </div>
          {/* Applied Jobs */}
          <div
            id="applied-jobs"
            className="bg-gray-900 border border-green-700 rounded-lg p-6 flex flex-col items-start shadow"
          >
            <h2 className="text-lg font-mono text-green-300 mb-2">
              Applied Jobs
            </h2>
            <p className="text-green-400 mb-4 text-sm">
              View jobs you have applied for.
            </p>
            <button className="bg-black border border-green-700 text-green-300 hover:bg-green-900 font-mono font-semibold py-2 px-4 rounded shadow transition cursor-pointer">
              View Applied Jobs
            </button>
          </div>
          {/* Learning Section */}
          <div
            id="learning"
            className="bg-gray-900 border border-green-700 rounded-lg p-6 flex flex-col items-start shadow"
          >
            <h2 className="text-lg font-mono text-green-300 mb-2">Learning</h2>
            <p className="text-green-400 mb-4 text-sm">
              Access learning resources and courses.
            </p>
            <button className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 rounded shadow transition border border-green-500 cursor-pointer">
              Go to Learning
            </button>
          </div>
          {/* Weekly Goals */}
          <div
            id="weekly-goals"
            className="bg-gray-900 border border-green-700 rounded-lg p-6 flex flex-col items-start shadow"
          >
            <h2 className="text-lg font-mono text-green-300 mb-2">
              Weekly Goals
            </h2>
            <ul className="text-green-400 mb-4 text-sm list-disc pl-5">
              <li>Apply to 5 jobs</li>
              <li>Finish React course</li>
              <li>Update portfolio project</li>
            </ul>
            <button className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 rounded shadow transition border border-green-500 cursor-pointer">
              Edit Goals
            </button>
          </div>
          {/* Projects Section */}

          <div
            id="new-project"
            className="bg-gray-900 border border-green-700 rounded-lg p-6 flex flex-col items-start shadow mb-2"
          >
            <h2 className="text-lg font-mono text-green-300 mb-2">
              New Project
            </h2>
            <p className="text-green-400 mb-4 text-sm">
              Start a new project and collaborate.
            </p>
            <button className="bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4 rounded shadow transition border border-green-500 cursor-pointer">
              New Project
            </button>
          </div>
          <div
            id="view-projects"
            className="bg-gray-900 border border-green-700 rounded-lg p-6 flex flex-col items-start shadow"
          >
            <h2 className="text-lg font-mono text-green-300 mb-2">
              View All Projects
            </h2>
            <p className="text-green-400 mb-4 text-sm">
              Browse all your projects.
            </p>
            <button className="bg-black border border-green-700 text-green-300 hover:bg-green-900 font-mono font-semibold py-2 px-4 rounded shadow transition cursor-pointer">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
