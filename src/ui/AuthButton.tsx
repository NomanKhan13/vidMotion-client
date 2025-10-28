import { Play } from "lucide-react";
import { Link } from "react-router";

const AuthButton = () => {
  return (
    <Link to="/auth/login">
      <button className="flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-500 text-white font-semibold px-8 py-3 shadow-md shadow-blue-200 tracking-wide cursor-pointer hover:opacity-90 transition">
        <Play size={18} /> <span className="text-sm">Login</span>
      </button>
    </Link>
  );
};

export default AuthButton;
