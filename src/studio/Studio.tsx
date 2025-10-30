import { Activity, useEffect, useState } from "react";
import StudioHeader from "./StudioHeader";
import StudioSidebar from "./StudioSidebar";
import { useNavigate, useParams } from "react-router";
import EditPersonalInfo from "./EditPersonalInfo";

const Studio = () => {
  /**
   * Navbar (hamburger menu, VidMotion studio + Create video button)
   * Sidebar (Profile edit(personal info, password, email, delete account) + Media (Content(list of videos) + Analytics))
   * Main Section (Depends on sidebar selection)
   */

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { section } = useParams();
  const navigate = useNavigate();

  const validSections = [
    "channel-customization",
    "edit-password",
    "edit-email",
    "delete-account",
    "content",
    "analytics",
  ];

  if (!validSections.includes(section)) {
    console.log("Invalid section, redirecting to channel-customization");
    navigate("/studio/channel-customization");
  }
  useEffect(() => {
    console.log("Current section:", section);
    setIsSidebarOpen(false);
  }, [section]);

  const onToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <StudioHeader onToggleSidebar={onToggleSidebar} />
      <StudioSidebar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={onToggleSidebar}
      />
      <main>
        <div>
          <Activity
            mode={section === "channel-customization" ? "visible" : "hidden"}
          >
            <EditPersonalInfo />
          </Activity>
          <Activity mode={section === "edit-password" ? "visible" : "hidden"}>
            <h1 className="text-2xl font-bold mb-4">
              Studio - Change Password
            </h1>
          </Activity>
          <Activity mode={section === "edit-email" ? "visible" : "hidden"}>
            <h1 className="text-2xl font-bold mb-4">Studio - Change Email</h1>
          </Activity>
          <Activity mode={section === "delete-account" ? "visible" : "hidden"}>
            <h1 className="text-2xl font-bold mb-4">Studio - Delete Account</h1>
          </Activity>
          <Activity mode={section === "content" ? "visible" : "hidden"}>
            <h1 className="text-2xl font-bold mb-4">Studio - Content</h1>
          </Activity>
          <Activity mode={section === "analytics" ? "visible" : "hidden"}>
            <h1 className="text-2xl font-bold mb-4">Studio - Analytics</h1>
          </Activity>
        </div>
      </main>
    </div>
  );
};

export default Studio;
