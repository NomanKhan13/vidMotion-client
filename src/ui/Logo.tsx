import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <h1>
      <Link
        to="/"
        className="flex items-center justify-center gap-1 md:p-2 font-medium text-xl md:text-3xl cursor-pointer"
      >
        <Clapperboard className="h-6 w-6 text-blue-600" />
        <span className="italic text-gray-900">VidMotion</span>
      </Link>
    </h1>
  );
};

export default Logo;
