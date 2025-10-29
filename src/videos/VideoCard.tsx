import { useNavigate } from "react-router";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  // Replace later with actual video ID and not the video URL
  const onVideoClick = () => navigate(`/watch?v=${video.videoURL}`);

  return (
    <div
      onClick={onVideoClick}
      key={video.id}
      className="cursor-pointer hover:bg-blue-100 p-4 rounded-lg transition duration-300 ease-in-out"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Video Info */}
      <div className="mt-3 flex gap-3">
        {/* Channel Avatar (placeholder for now) */}
        <div className="w-9 h-9 rounded-full bg-gray-300 shrink-0">
          <img
            src="https://robohash.org/noman"
            className="w-full h-full overflow-hidden object-cover rounded-full"
          />
        </div>

        {/* Title and Meta */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
          <p className="text-xs text-gray-500">
            {video.views} • {video.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
