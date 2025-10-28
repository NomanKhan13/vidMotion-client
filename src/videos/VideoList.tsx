import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 1",
    views: "1M views",
    timeAgo: "2 days ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 2",
    views: "2M views",
    timeAgo: "1 week ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 3,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 3",
    views: "3M views",
    timeAgo: "2 weeks ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 4,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 1",
    views: "1M views",
    timeAgo: "2 days ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 2",
    views: "2M views",
    timeAgo: "1 week ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 6,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 3",
    views: "3M views",
    timeAgo: "2 weeks ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 7,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 4",
    views: "4M views",
    timeAgo: "3 weeks ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
  {
    id: 8,
    title:
      "Don't Look Up (2021) - Séance Spéciale du 12 avril 2023 au Grand Rex !",
    channel: "Channel 4",
    views: "4M views",
    timeAgo: "3 weeks ago",
    thumbnail: "https://i.ibb.co/JRw3MMys/dummy.png",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
];

export default function VideoList() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-y-8 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
}
