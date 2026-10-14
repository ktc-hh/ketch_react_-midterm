import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";

function NotFound() {
  return <main className="page-wrap empty-state"><div className="eyebrow">404 · PAGE NOT FOUND</div><h1>This page took a wrong turn.</h1><p>The page you're looking for doesn't exist.</p><Link to="/" className="button button-primary">Go home</Link></main>;
}
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer"><Link to="/" className="footer-brand">EventHub<span>.</span></Link><p>Make room for something great.</p><span>© 2026 EventHub · Student project</span></footer>
    </div>
  );
}