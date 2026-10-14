import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">E</span>
          <span>Event<span className="brand-accent">Hub</span></span>
        </Link>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/register" className="nav-cta">Register <span>↗</span></NavLink>
        </nav>
      </div>
    </header>
  );
}