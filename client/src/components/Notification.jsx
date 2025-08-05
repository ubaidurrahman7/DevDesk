import React, { useState, useRef, useEffect } from "react";

const initialNotifications = [
  {
    id: 1,
    type: "Job Update",
    message: "New job posted: Frontend Developer",
    read: false,
  },
  {
    id: 2,
    type: "Project Invite",
    message: "You were added to 'DevDesk Collaboration Tool'",
    read: false,
  },
  {
    id: 3,
    type: "System",
    message: "Your profile has been updated successfully",
    read: true,
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <span className="h-6 w-6 text-green-200">🔔</span>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-gray-900 border border-green-700 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-green-700 text-green-300 font-bold">
            Notifications
          </div>

          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`flex justify-between items-start p-3 border-b border-green-700 ${
                  n.read ? "text-green-500" : "text-green-300 font-bold"
                }`}
              >
                <div>
                  <p className="text-sm cursor-pointer">{n.message}</p>
                  <span className="text-xs text-green-600">{n.type}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {!n.read && (
                    <button
                      onClick={() => markAsRead(n.id)}
                      className="text-xs text-green-400 cursor-pointer hover:text-green-300"
                    >
                      Mark Read
                    </button>
                  )}
                  <button
                    onClick={() => dismissNotification(n.id)}
                    className="text-xs text-red-500 cursor-pointer hover:text-red-400"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-3 text-green-500 text-sm">
              No new notifications
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Notifications;
