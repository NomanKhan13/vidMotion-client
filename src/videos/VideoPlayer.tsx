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

const VideoPlayer = ({ video }) => {
  return (
    <MediaController className="relativebg-gray-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full aspect-video">
      <ReactPlayer
        slot="media"
        src={`https://res.cloudinary.com/dnmpomkeb/video/upload/f_auto,q_auto/${video.videoURL}`}
        light={video.thumbnail}
        playing={false}
        controls={false}
        width="100%"
        height="100%"
        style={{ borderRadius: "10px" }}
        autoPlay
      />
      <MediaSeekBackwardButton
        seekOffset={10}
        className="absolute left-10 top-1/2 -translate-y-full bg-black/40 text-white rounded-full p-3 hover:bg-black/60"
      />
      <MediaSeekForwardButton
        seekOffset={10}
        className="absolute right-10 top-1/2 -translate-y-full bg-black/40 text-white rounded-full p-3 hover:bg-black/60"
      />
      <MediaControlBar className="bg-black/50 backdrop-blur-md text-white">
        <MediaPlayButton />
        <MediaTimeRange className="px-2" />
        <MediaTimeDisplay showDuration className="px-2" />
        <MediaMuteButton />
        <MediaVolumeRange />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
      </MediaControlBar>
    </MediaController>
  );
};

export default VideoPlayer;
