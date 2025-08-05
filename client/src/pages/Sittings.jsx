import React, { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-3xl font-bold text-green-300 mb-6">Settings</h1>

      <div className="bg-gray-900 border border-green-700 rounded-lg p-6 shadow max-w-lg">
        {/* Theme Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-green-300">Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded font-bold border transition ${
              darkMode
                ? "bg-green-700 text-black border-green-500"
                : "bg-black text-green-300 border-green-700 hover:bg-green-900"
            }`}
          >
            {darkMode ? "Enabled" : "Disabled"}
          </button>
        </div>

        {/* Notification Preferences */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-green-300">Notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`px-4 py-2 rounded font-bold border transition ${
              notifications
                ? "bg-green-700 text-black border-green-500"
                : "bg-black text-green-300 border-green-700 hover:bg-green-900"
            }`}
          >
            {notifications ? "On" : "Off"}
          </button>
        </div>

        <p className="text-green-500 text-sm mt-4">
          Your preferences are saved locally for now.
        </p>
      </div>
    </div>
  );
}

export default Settings;
