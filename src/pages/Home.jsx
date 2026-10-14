import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> YOUR CAMPUS, YOUR COMMUNITY</div>
          <h1>Make room for<br /><span>something great.</span></h1>
          <p className="hero-text">Find campus events, meet people who share your interests, and make memories worth keeping.</p>
          <div className="hero-actions">
            <Link to="/events" className="button button-primary">Explore events <span>→</span></Link>
            <Link to="/register" className="button button-ghost">Join an event</Link>
          </div>
          <div className="hero-note"><span className="avatar-stack"><i>A</i><i>M</i><i>J</i></span><span><strong>Good things happen together.</strong><br />Find your people at EventHub.</span></div>
        </div>
        <div className="hero-art">
          <div className="art-glow" />
          <div className="art-card art-card-back"><span>✦</span><p>CREATE<br />CONNECTIONS</p></div>
          <div className="art-card art-card-front">
            <div className="art-top"><span className="art-tag">UP NEXT</span><span>✧</span></div>
            <div className="art-symbol">✳</div>
            <p className="art-date">OCT 24 · 5:00 PM</p>
            <h3>Web Dev<br />Night</h3>
            <p className="art-location">⌖ Innovation Hall</p>
            <div className="art-bottom"><span>MEET. LEARN. BUILD.</span><span>↗</span></div>
          </div>
          <div className="floating-chip chip-one">✦ <span>New experiences</span></div>
          <div className="floating-chip chip-two"><span className="live-dot" /> Open for everyone</div>
        </div>
      </section>
      <section className="section events-section">
        <div className="section-heading">
          <div><div className="eyebrow">DON'T MISS OUT</div><h2>Coming up <span>next.</span></h2></div>
          <Link to="/events" className="text-link">View all events <span>→</span></Link>
        </div>
        <div className="event-grid">
          {events.map(event => (
            <article className="event-card" key={event.id}>
              <div className={`event-art ${event.color}`}><span className="event-art-icon">{event.icon}</span><span className="event-category">{event.category}</span><span className="event-number">0{event.id}</span></div>
              <div className="event-content">
                <p className="event-date">{event.date} <span>·</span> {event.time.split("–")[0]}</p>
                <h3>{event.title}</h3><p className="event-description">{event.description}</p>
                <div className="event-card-footer"><span>⌖ {event.location}</span><Link to={`/events/${event.id}`} aria-label={`View ${event.title}`}>↗</Link></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bottom-cta">
        <div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Show up. Join in. <span>Belong.</span></h2></div>
        <Link to="/register" className="button button-primary">Register today <span>→</span></Link>
      </section>
    </>
  );
}