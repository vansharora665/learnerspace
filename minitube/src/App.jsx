import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import dummyVideos from "./data/dummyVideos";

function App() {
  const [likedVideos, setLikedVideos] = useState(() =>
    JSON.parse(sessionStorage.getItem("likedVideos")) || []
  );
  const [watchLater, setWatchLater] = useState(() =>
    JSON.parse(sessionStorage.getItem("watchLater")) || []
  );
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("likedVideos", JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  return (
    <Router>
      <Navbar watchLaterCount={watchLater.length} />

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: "fixed",
          top: "70px",
          left: "10px",
          zIndex: 1000,
          padding: "10px",
          borderRadius: "6px",
          backgroundColor: "#ffffff",
          color: "#c4302b",
          border: "1px solid #ddd",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          fontSize: "20px",
        }}
        title={sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      >
        ☰
      </button>

      <Sidebar isOpen={sidebarOpen} />

      {/* Main content */}
      <div
        style={{
          padding: "1rem",
          minHeight: "calc(100vh - 100px)",
          marginLeft: "0", // no shift
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                videos={dummyVideos}
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
                videos={dummyVideos.filter((v) =>
                  watchLater.includes(v.id)
                )}
                setWatchLater={setWatchLater}
                watchLater={watchLater}
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
