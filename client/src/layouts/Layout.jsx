import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Header onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />
      <div className="flex flex-1 w-full h-0">
        <Sidebar open={sidebarOpen} onLogout={handleLogout} />
        <div className="flex-1 flex flex-col overflow-y-auto h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
