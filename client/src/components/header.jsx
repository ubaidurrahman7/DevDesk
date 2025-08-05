import { Navigate, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Notifications from "./Notification";

function Header({ onSidebarToggle }) {
  const navigate = useNavigate();
  return (
    <header className="bg-green-900 text-green-200 px-6 py-4 flex items-center justify-between shadow w-full">
      <div className="flex items-center gap-4">
        <button
          className="text-green-200 bg-green-800 hover:bg-green-700 rounded px-3 py-1 font-mono font-bold transition md:hidden"
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <span className="font-mono text-xl font-bold tracking-wide">
          DevDesk
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications Dropdown */}
        <Notifications />

        {/* User Dropdown */}
        <DropdownMenu
          trigger={<UserCircleIcon className="h-7 w-7 text-green-300" />}
          items={[
            { label: "Profile", onClick: () => navigate("/profile") },
            { label: "Settings", onClick: () => navigate("/settings") },
            { label: "Logout", onClick: () => alert("Logged out") },
          ]}
        />

        <span className="font-mono text-green-400 hidden md:inline">
          ● Online
        </span>
      </div>
    </header>
  );
}

export default Header;
