import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function Events() {
  return (
    <main className="page-wrap">
      <div className="page-intro"><div className="eyebrow">THE EVENT LINEUP</div><h1>Find your <span>next thing.</span></h1><p>Explore what's happening around campus and find an experience you'll love.</p></div>
      <div className="event-grid">
        {events.map(event => (
          <article className="event-card" key={event.id}>
            <div className={`event-art ${event.color}`}><span className="event-art-icon">{event.icon}</span><span className="event-category">{event.category}</span><span className="event-number">0{event.id}</span></div>
            <div className="event-content"><p className="event-date">{event.date} <span>·</span> {event.time}</p><h3>{event.title}</h3><p className="event-description">{event.description}</p><div className="event-card-footer"><span>⌖ {event.location}</span><Link to={`/events/${event.id}`} aria-label={`View ${event.title}`}>↗</Link></div></div>
          </article>
        ))}
      </div>
    </main>
  );
}