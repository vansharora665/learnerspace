import VideoCard from "../components/VideoCard";

function WatchLater({ videos, watchLater, setWatchLater }) {
  const removeFromWatchLater = (id) => {
    setWatchLater(watchLater.filter(v => v !== id));
  };

  return (
    <div>
      <h2>Watch Later</h2>
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            isLiked={false}
            onLike={() => {}}
            onToggleWatchLater={removeFromWatchLater}
            isInWatchLater={true}
          />
        ))}
      </div>
    </div>
  );
}

export default WatchLater;