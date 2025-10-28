import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";
import SubButton from "../ui/SubButton";
import { Clock, Plus, Share2, ThumbsUp } from "lucide-react";

export default function VideoPlayer() {
  return (
    <div className="sm:p-8 py-4">
      <div className="w-full max-w-4xl mx-auto mb-4 px-4">
        <MediaController className="bg-gray-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full aspect-video">
          <ReactPlayer
            slot="media"
            src="https://res.cloudinary.com/dnmpomkeb/video/upload/f_auto,q_auto/v1761028320/nvmex0bp3gx6kmrwmpdt.mp4"
            light="https://i.ibb.co/JRw3MMys/dummy.png"
            playing={false}
            controls={false}
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
          />
          <MediaControlBar className="bg-black/50 backdrop-blur-md text-white">
            <MediaPlayButton />
            <MediaSeekBackwardButton seekOffset={10} />
            <MediaSeekForwardButton seekOffset={10} />
            <MediaTimeRange />
            <MediaTimeDisplay showDuration />
            <MediaMuteButton />
            <MediaVolumeRange />
            <MediaPlaybackRateButton />
            <MediaFullscreenButton />
          </MediaControlBar>
        </MediaController>
        <ul className="flex gap-3 mt-4 justify-between overflow-x-scroll w-full">
          {[
            { text: "Like", icon: <ThumbsUp /> },
            { text: "Watch later", icon: <Clock /> },
            { text: "Add to playlist", icon: <Plus /> },
            { text: "Share", icon: <Share2 /> },
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
            <h2 className="text-xl sm:text-2xl text-gray-900">
              Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand
              Rex !
            </h2>
            <div className="flex gap-3 items-center py-4">
              <div className="h-12 w-12 shrink-0 rounded-full overflow-hidden bg-blue-100 hover:scale-105 transition-transform">
                <img
                  src="https://robohash.org/nomands"
                  alt="channel avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="">
                <h3 className="font-semibold text-gray-900 leading-tight truncate w-32 sm:w-max">
                  Cinema for a change
                </h3>
                <p className="text-sm text-gray-500">126k subscribers</p>
              </div>
              <SubButton onSubscribe={() => console.log("Subscribed test")} />
            </div>
          </div>
          <p>3 years ago</p>
          <p className="text-sm leading-relaxed text-gray-700 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            fugiat delectus expedita necessitatibus nulla ipsa odio commodi
            excepturi minima maiores doloremque quo eligendi recusandae aliquam
            totam vero quidem, velit iure? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Vero quaerat, expedita maxime sequi
            illum quis quo odio, unde nam eius atque beatae consectetur
            assumenda numquam porro accusantium! Molestias, tempore facere?
          </p>
        </div>
      </div>
    </div>
  );
}
