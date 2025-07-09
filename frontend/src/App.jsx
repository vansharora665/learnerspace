import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

function App() {
  const [likedVideos, setLikedVideos] = useState(() =>
    JSON.parse(sessionStorage.getItem("likedVideos")) || []
  );
  const [watchLater, setWatchLater] = useState(() =>
    JSON.parse(sessionStorage.getItem("watchLater")) || []
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [videos, setVideos] = useState([]);

  // Fetch videos from Django backend
  useEffect(() => {
    fetch("http://localhost:8000/api/videos/")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Failed to load videos:", err));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("likedVideos", JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  return (
    <Router>
      <Navbar watchLaterCount={watchLater.length} />
      <div className="app-container">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                videos={videos}
                likedVideos={likedVideos}
                setLikedVideos={setLikedVideos}
                watchLater={watchLater}
                setWatchLater={setWatchLater}
              />
            }
          />
          <Route
            path="/watch-later"
            element={
              <WatchLater
                videos={watchLater}
                setWatchLater={setWatchLater}
                likedVideos={likedVideos}
                setLikedVideos={setLikedVideos}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
