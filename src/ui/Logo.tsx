import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

const Logo = ({ logoFor }) => {
  return (
    <h1>
      <Link
        to="/"
        className="flex items-center justify-center gap-1 md:p-2 font-medium text-xl md:text-2xl cursor-pointer"
      >
        <Clapperboard className="h-6 w-6 text-blue-600" />
        <span className="italic text-gray-900">{logoFor}</span>
      </Link>
    </h1>
  );
};

export default Logo;
