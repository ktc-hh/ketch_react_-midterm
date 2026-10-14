import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(item => item.id === id);

  if (!event) {
    return <main className="page-wrap empty-state"><div className="eyebrow">EVENT NOT FOUND</div><h1>We couldn't find that event.</h1><p>It may have been removed or the URL may be incorrect.</p><Link className="button button-primary" to="/events">Browse events</Link></main>;
  }

  return (
    <main className="page-wrap detail-layout">
      <div className={`detail-art ${event.color}`}><span>{event.icon}</span><small>{event.category} · EVENT 0{event.id}</small></div>
      <div className="detail-copy"><Link to="/events" className="back-link">← All events</Link><div className="eyebrow">YOUR NEXT EXPERIENCE</div><h1>{event.title}</h1><p className="detail-description">{event.description}</p>
        <div className="detail-info"><div><span>DATE</span><strong>{event.date}</strong></div><div><span>TIME</span><strong>{event.time}</strong></div><div><span>LOCATION</span><strong>{event.location}</strong></div><div><span>AVAILABILITY</span><strong>{event.spots}</strong></div></div>
        <Link to={`/register?event=${event.id}`} className="button button-primary">Register for this event <span>→</span></Link>
      </div>
    </main>
  );
}