import SubButton from "../ui/SubButton";
import { Clock, Plus, Share2, ThumbsUp } from "lucide-react";
import { useSearchParams } from "react-router";
import VideoPlayer from "./VideoPlayer";

export default function VideoPlayerPage() {
  const [searchParams] = useSearchParams();
  const videoURL = searchParams.get("v");

  const video = {
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Cinema for a change",
    views: "1M views",
    timeAgo: "2 days ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    videoURL: videoURL,
    avatarURL: "https://robohash.org/nomands",
    subscribers: "500K",
    category: "Entertainment",

    // videoURL: videoURL || "v1761028320/nvmex0bp3gx6kmrwmpdt.mp4",
  };

  return (
    <div className="sm:p-8 py-4">
      <div className="w-full max-w-4xl mx-auto mb-4 px-4">
        <VideoPlayer video={video} />
        <ul className="flex gap-3 mt-4 justify-between overflow-x-scroll w-full">
          {[
            { text: "Like", icon: <ThumbsUp size={18} /> },
            { text: "Watch later", icon: <Clock size={18} /> },
            { text: "Add to playlist", icon: <Plus size={18} /> },
            { text: "Share", icon: <Share2 size={18} /> },
          ].map((item) => (
            <li
              key={item.text}
              className="flex flex-col sm:flex-row basis-30 shrink-0 items-center justify-center gap-2 flex-1 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
            >
              {item.icon}
              <span className="text-sm text-gray-800">{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="bg-gray-100 rounded-md mt-6 p-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {video.title}
            </h2>
            <div className="flex gap-3 items-center py-4">
              <div className="h-12 w-12 shrink-0 rounded-full overflow-hidden bg-blue-100 hover:scale-105 transition-transform">
                <img
                  src={video.avatarURL}
                  alt="channel avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="">
                <h3 className="font-semibold text-gray-900 leading-tight truncate w-32 sm:w-max">
                  {video.channel}
                </h3>
                <p className="text-sm text-gray-500">
                  {video.subscribers} subscribers
                </p>
              </div>
              <SubButton onClick={() => console.log("Subscribed test")}>
                Subscribe
              </SubButton>
            </div>
          </div>
          <p>{video.timeAgo}</p>
          <p className="text-sm leading-relaxed text-gray-700 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            fugiat delectus expedita necessitatibus nulla ipsa odio commodi
            excepturi minima maiores doloremque quo eligendi recusandae aliquam
            totam vero quidem, velit iure? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Vero quaerat, expedita maxime sequi
            illum quis quo odio, unde nam eius atque beatae consectetur
            assumenda numquam porro accusantium! Molestias, tempore facere?
          </p>
          <p>
            <span>Category: </span>
            {/* Change this to link later */}
            <span className="underline underline-offset-4">
              {video.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
