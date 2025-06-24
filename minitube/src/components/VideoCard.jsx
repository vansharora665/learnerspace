function VideoCard({ video, isLiked, onLike, onToggleWatchLater, isInWatchLater }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.channel}</p>
      <p>{video.views} • {video.time}</p>
      <button onClick={() => onLike(video.id)}>{isLiked ? "❤️" : "🤍"}</button>
      <button onClick={() => onToggleWatchLater(video.id)}>
        {isInWatchLater ? "✔️ Added" : "➕ Watch Later"}
      </button>
    </div>
  );
}

export default VideoCard;