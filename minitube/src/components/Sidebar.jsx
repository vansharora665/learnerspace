import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${!isOpen ? "closed" : ""}`}>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/watch-later">⏰ Watch Later</Link></li>
        <li><Link to="/subscriptions">📺 Subscriptions</Link></li>
          <li><Link to="/library">📚 Library</Link></li>
          <li><Link to="/history">🕒 History</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
