import clsx from "clsx";
import {
  User,
  X,
  Fingerprint,
  MailPlus,
  Trash,
  SquarePlay,
  ChartSpline,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const profileItems = [
  {
    id: "channel-customization",
    label: "Personal Information",
    icon: <User size={20} />,
  },
  {
    id: "edit-password",
    label: "Edit Password",
    icon: <Fingerprint size={20} />,
  },
  {
    id: "edit-email",
    label: "Edit Email",
    icon: <MailPlus size={20} />,
  },
  { id: "delete-account", label: "Delete Account", icon: <Trash size={20} /> },
];

const mediaItems = [
  {
    id: "content",
    label: "Content",
    icon: <SquarePlay size={20} />,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <ChartSpline size={20} />,
  },
];

const StudioSidebar = ({ isSidebarOpen, onToggleSidebar }) => {
  const [isActive, setIsActive] = useState("for-you"); // Placeholder for active state logic
  return (
    <aside
      className={clsx(
        "p-4 shadow-lg border-r border-gray-200 h-full overflow-y-auto fixed left-0 top-0 bottom-0 z-100 bg-white transition-transform duration-300 ease-in-out w-full max-w-xs",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <button
        className="hover:bg-gray-100 transition rounded p-2 cursor-pointer"
        onClick={onToggleSidebar}
      >
        <X />
      </button>
      <div>
        <p className="font-semibold py-2">Account settings</p>
        <ul className="space-y-1 py-2">
          {profileItems.map((profile) => (
            <li onClick={() => setIsActive(profile.id)} key={profile.id}>
              <Link
                to={`/studio/${profile.id}`}
                className={clsx(
                  "p-2 flex profiles-center gap-3 font-medium rounded-md cursor-pointer transition",
                  isActive === profile.id
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                )}
              >
                {profile.icon} {profile.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-3 border-gray-200" />

      <div>
        <p className="font-semibold py-2">Explore categories</p>
        <ul>
          {mediaItems.map((media) => (
            <li onClick={() => setIsActive(media.id)} key={media.id}>
              <Link
                to={`/studio/${media.id}`}
                className={clsx(
                  "p-2 flex items-center gap-3 font-medium rounded-md cursor-pointer transition",
                  isActive === media.id
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                )}
              >
                {media.icon} {media.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default StudioSidebar;
