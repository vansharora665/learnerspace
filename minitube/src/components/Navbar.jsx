import { Link } from "react-router-dom";

function Navbar({ watchLaterCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.jpg" alt="MiniTube Logo" className="logo" />
        <Link to="/" className="site-title">MiniTube</Link>
      </div>
      <input type="text" placeholder="Search (dummy)" className="search-bar" />
      <Link to="/watch-later" className="watch-later-link">Watch Later ({watchLaterCount})</Link>
    </nav>
  );
}

export default Navbar;