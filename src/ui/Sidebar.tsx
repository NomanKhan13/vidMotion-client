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
import { useState } from "react";

const menuItems = [
  { id: "for-you", label: "For You", icon: <Home size={20} /> },
  { id: "trending", label: "Trending", icon: <Flame size={20} /> },
  {
    id: "subscriptions",
    label: "Subscriptions",
    icon: <GalleryVerticalEnd size={20} />,
  },
  { id: "profile", label: "Profile", icon: <User size={20} /> },
];

const categories = [
  {
    id: "music",
    label: "Music",
    icon: <Music size={20} />,
  },
  {
    id: "sports",
    label: "Sports",
    icon: <Medal size={20} />,
  },
  {
    id: "gaming",
    label: "Gaming",
    icon: <Gamepad2 size={20} />,
  },
  {
    id: "news",
    label: "News",
    icon: <Newspaper size={20} />,
  },
  {
    id: "fun",
    label: "Fun",
    icon: <Smile size={20} />,
  },
];

const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
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
      <ul className="space-y-1 py-2">
        {menuItems.map((item) => (
          <li
            onClick={() => setIsActive(item.id)}
            key={item.id}
            className={clsx(
              "p-2 flex items-center gap-3 font-medium rounded-md cursor-pointer transition",
              isActive === item.id
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100"
            )}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
      <hr className="my-3 border-gray-200" />

      <div>
        <p className="font-semibold py-2">Explore categories</p>
        <ul>
          {categories.map((category) => (
            <li
              className={clsx(
                "p-2 flex items-center gap-3 font-medium rounded-md cursor-pointer transition",
                isActive === category.id
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"
              )}
              onClick={() => setIsActive(category.id)}
              key={category.id}
            >
              {category.icon} {category.label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
