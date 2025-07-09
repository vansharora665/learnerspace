import VideoCard from "../components/VideoCard";
import Timer from "../components/Timer";

function Home({ videos, likedVideos, setLikedVideos, watchLater, setWatchLater }) {
  const toggleLike = (id) => {
    setLikedVideos(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const toggleWatchLater = (id) => {
    setWatchLater(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <Timer />
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            isLiked={likedVideos.includes(video.id)}
            onLike={toggleLike}
            onToggleWatchLater={toggleWatchLater}
            isInWatchLater={watchLater.includes(video.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;