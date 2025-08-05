import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Sidebar({ open }) {
  function handlelogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <div>
      {open && (
        <aside className="w-56 bg-black border-r-2 border-green-700 flex flex-col pt-8 pb-2 px-4 transition-all duration-300 z-10 h-[calc(100vh-4rem)] sticky top-0">
          <div className="mb-10">
            <span className="text-green-400 font-mono text-2xl font-bold">
              Developer
            </span>
          </div>
          <nav className="flex flex-col gap-4 font-mono text-green-300">
            <Link
              to={"/dashboard"}
              href="#new-job"
              className="hover:text-green-400 transition"
            >
              Dashboard
            </Link>
            <Link
              to={"/jobs"}
              href="#new-job"
              className="hover:text-green-400 transition"
            >
              New Job
            </Link>
            <Link
              to={"/applied-jobs"}
              className="hover:text-green-400 transition"
            >
              Applied Jobs
            </Link>
            <Link to={"/Learning"} className="hover:text-green-400 transition">
              Learning
            </Link>
            <Link
              to={"/projects/new"}
              className="hover:text-green-400 transition"
            >
              New Project
            </Link>
            <Link to={"/projects"} className="hover:text-green-400 transition">
              View Projects
            </Link>
          </nav>
          <div className="mt-auto pt-10 flex flex-col gap-2">
            <span className="text-green-700 text-xs font-mono">● online</span>
            <button
              className="  text-white font-mono font-bold py-2  flex items-center rounded transition "
              onClick={handlelogout}
            >
              <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
              Logout
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Sidebar;
