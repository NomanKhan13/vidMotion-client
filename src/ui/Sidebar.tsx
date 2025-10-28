import clsx from "clsx";
import {
  Home,
  Flame,
  User,
  Music,
  Gamepad2,
  Newspaper,
  Smile,
  X,
  Medal,
  GalleryVerticalEnd,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
  const isActive = true; // Placeholder for active state logic
  return (
    <aside
      className={clsx(
        "p-4 shadow-lg border-r border-gray-200 h-full absolute left-0 top-0 z-100 bg-white transition-transform duration-300 ease-in-out w-full max-w-xs",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <button
        className="hover:bg-gray-100 transition rounded p-2 cursor-pointer"
        onClick={onToggleSidebar}
      >
        <X />
      </button>
      <ul className="space-y-1">
        <li className="p-2 hover:bg-gray-100 flex items-center gap-3 rounded-md cursor-pointer">
          <Home size={18} className="text-gray-600" /> For You
        </li>
        <li
          className={clsx(
            "p-2 flex items-center gap-3 rounded-md cursor-pointer transition",
            isActive
              ? "bg-blue-50 text-blue-600 font-medium"
              : "hover:bg-gray-100"
          )}
        >
          <Flame
            size={18}
            className={isActive ? "text-blue-600" : "text-gray-600"}
          />
          Trending
        </li>

        <li className="p-2 hover:bg-gray-100 flex items-center gap-3 rounded-md cursor-pointer">
          <GalleryVerticalEnd size={18} className="text-gray-600" />{" "}
          Subscriptions
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center gap-3 rounded-md cursor-pointer">
          <User size={18} className="text-gray-600" /> Profile
        </li>
      </ul>
      <hr className="my-3 border-gray-200" />

      <div>
        <p className="font-semibold py-2">Explore categories</p>
        <ul>
          <li className="p-2 hover:bg-gray-100 flex cursor-pointer items-center gap-2">
            <Music size={18} className="text-gray-600" /> Music
          </li>
          <li className="p-2 hover:bg-gray-100 flex cursor-pointer items-center gap-2">
            <Medal size={18} className="text-gray-600" /> Sports
          </li>
          <li className="p-2 hover:bg-gray-100 flex cursor-pointer items-center gap-2">
            <Gamepad2 size={18} className="text-gray-600" /> Gaming
          </li>
          <li className="p-2 hover:bg-gray-100 flex cursor-pointer items-center gap-2">
            <Newspaper size={18} className="text-gray-600" /> News
          </li>
          <li className="p-2 hover:bg-gray-100 flex cursor-pointer items-center gap-2">
            <Smile size={18} className="text-gray-600" /> Fun
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
