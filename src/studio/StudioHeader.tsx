import { Menu, Video } from "lucide-react";
import Logo from "../ui/Logo";

const StudioHeader = ({ onToggleSidebar }) => {
  return (
    <header className="flex justify-between p-3 sm:px-6 shadow sticky top-0 bg-white z-50">
      <div className="flex items-center gap-2">
        <button
          className="hover:bg-gray-100 transition rounded p-2 cursor-pointer"
          onClick={onToggleSidebar}
        >
          <Menu />
        </button>
        <Logo logoFor="Studio" />
      </div>

      <div className="flex gap-2 self-center">
        <button className="rounded border border-gray-200 hover:bg-gray-100 cursor-pointer transition p-2 flex gap-2 items-center justify-center">
          <Video size={20} /> <span>Studio</span>
        </button>
      </div>
    </header>
  );
};

export default StudioHeader;
