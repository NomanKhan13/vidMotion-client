import { LogOut, Menu, Search, User, Video } from "lucide-react";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import { Link } from "react-router";
import { useState } from "react";
import clsx from "clsx";

const Navbar = ({ onToggleSidebar }) => {
  const isLogin = true; // TODO: replace with auth logic
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const profileDropdownItems = [
    {
      id: 1,
      label: "Profile",
      href: "/profile/username",
      icon: <User size={20} />,
    },
    {
      id: 2,
      label: "Studio",
      href: "/studio/channel-customization",
      icon: <Video size={20} />,
    },
    {
      id: 3,
      label: "Logout",
      href: "/auth/logout",
      icon: <LogOut size={20} />,
    },
  ];

  return (
    <header className="flex justify-between p-3 sm:px-6 shadow sticky top-0 bg-white z-50">
      <div className="flex items-center gap-2">
        <button
          className="hover:bg-gray-100 transition rounded p-2 cursor-pointer"
          onClick={onToggleSidebar}
        >
          <Menu />
        </button>
        <Logo logoFor="VidMotion" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-1/2 hover:bg-gray-200 cursor-text transition">
          <Search size={20} className="text-gray-500" />
          <span className="text-gray-500 text-sm">Search</span>
        </div>
      </div>
      <div className="flex gap-2 self-center">
        <div className="rounded border border-gray-200 hover:bg-gray-100 cursor-pointer transition p-2 items-center justify-center flex md:hidden">
          <Search size={20} />
        </div>
        {isLogin && (
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="h-10 w-10 rounded-full border border-gray-200 hover:ring-2 hover:ring-gray-300 transition">
              <img
                src="https://robohash.org/noman?set=set5"
                alt="avatar"
                className="rounded-full h-full w-full object-cover"
              />
            </button>
            <ul
              className={clsx(
                "absolute bg-white rounded-md shadow top-full right-0 transition-opacity w-40",
                isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              {profileDropdownItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-sm flex gap-2 items-center text-gray-700 hover:bg-gray-100"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!isLogin && <AuthButton />}
      </div>
    </header>
  );
};

export default Navbar;
