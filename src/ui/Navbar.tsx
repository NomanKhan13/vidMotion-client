import { Clapperboard, Menu, Search } from "lucide-react";
import Logo from "./Logo";
import AuthButton from "./AuthButton";

const Navbar = ({ onToggleSidebar }) => {
  const isLogin = false; // TODO: replace with auth logic

  return (
    <header className="flex justify-between p-3 sm:px-6 shadow sticky top-0 bg-white z-50">
      <div className="flex items-center gap-2">
        <button
          className="hover:bg-gray-100 transition rounded p-2 cursor-pointer"
          onClick={onToggleSidebar}
        >
          <Menu />
        </button>
        <Logo />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-1/2 hover:bg-gray-200 cursor-text transition">
          <Search size={18} className="text-gray-500" />
          <span className="text-gray-500 text-sm">Search</span>
        </div>
      </div>
      <div className="flex gap-2 self-center">
        <div className="rounded border border-gray-200 hover:bg-gray-100 cursor-pointer transition p-2 items-center justify-center flex md:hidden">
          <Search size={20} />
        </div>
        {isLogin && (
          <button className="h-10 w-10 rounded-full border border-gray-200 hover:ring-2 hover:ring-gray-300 transition">
            <img
              src="https://robohash.org/noman?set=set5"
              alt="avatar"
              className="rounded-full h-full w-full object-cover"
            />
          </button>
        )}
        {!isLogin && <AuthButton />}
      </div>
    </header>
  );
};

export default Navbar;
