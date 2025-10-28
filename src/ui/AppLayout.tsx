import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = (): void => {
    console.log("Toggling sidebar", isSidebarOpen);
    setIsSidebarOpen((prevState): boolean => !prevState);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
