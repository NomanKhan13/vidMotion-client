import { useState } from "react";
import { Video, ListVideo, Users, Heart, Clock } from "lucide-react";
import TabItem from "./TabItem";
import VideoList from "../videos/VideoList";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Uploaded");

  const tabs = [
    { id: "uploadedVideos", label: "Uploaded", icon: <Video size={16} /> },
    { id: "playlists", label: "Playlists", icon: <ListVideo size={16} /> },
    {
      id: "subscribedChannels",
      label: "Subscriptions",
      icon: <Users size={16} />,
    },
    { id: "likedVideos", label: "Liked", icon: <Heart size={16} /> },
    { id: "watchLater", label: "Watch Later", icon: <Clock size={16} /> },
  ];

  return (
    <div>
      <ul className="flex overflow-x-auto gap-2 pt-4 pb-3">
        {tabs.map(({ id, label, icon }) => (
          <TabItem
            id={id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={icon}
            label={label}
          />
        ))}
      </ul>
      {/* Remove later */}
      <p className="text-sm text-gray-500">Showing {activeTab} videos</p>
      <VideoList />
    </div>
  );
}
