import { Link, useNavigate, useSearchParams } from "react-router";
import SubButton from "../ui/SubButton";
import Tabs from "./Tabs";

const ProfilePage = () => {
  // later fetch user data using username from params
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const navigate = useNavigate();
  const userData = {
    fullName: "John Doe",
    username: username || "johndoe",
    subscribers: "1.2M",
    bio: "This is my bio. Welcome to my profile!",
    avatarURL:
      "https://yt3.googleusercontent.com/ytc/AIdro_lRwr5YJ2Kejccyz3QveN0_HaXU75vE7Agh5hbZmYriKg=s160-c-k-c0x00ffffff-no-rj",
    cover:
      "https://yt3.googleusercontent.com/XIxKGKKfmAICREBGQGk2U8FQuIohh36FRPco_pGprmOu0d6gaT-9Q0l1h6onTpcqinL_goIZwAw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  };

  return (
    /**
     * cover image
     * avatar | Full Name + (username + subscribers) + bio + Edit Profile Button
     * Tabs: Uploaded videos, Playlists, subscribed channels, liked videos, watch later
     */
    <div className="w-full max-w-7xl mx-auto py-8 px-4 lg:px-8 ">
      <div className="aspect-16/5 rounded-lg overflow-hidden bg-gray-300 shadow-sm">
        <img
          src={userData.cover}
          alt="Channel cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center gap-6 mt-8">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-white overflow-hidden bg-gray-300 shadow-sm">
          <img
            src={userData.avatarURL}
            alt="Channel avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            {userData.fullName}
          </h1>
          <p className="text-sm text-gray-600 mt-0.5">
            {userData.username} • {userData.subscribers} subscribers
          </p>
          <p className="text-gray-700 text-sm sm:text-base mt-1 max-w-lg">
            {userData.bio}
          </p>
          <Link to={`/profile/edit`}>
            <SubButton>Edit Profile</SubButton>
          </Link>
        </div>
      </div>
      <hr className="border-t border-gray-200 mt-8 mb-2" />
      <Tabs />
    </div>
  );
};

export default ProfilePage;
