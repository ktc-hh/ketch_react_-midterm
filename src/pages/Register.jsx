import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { events } from "../data/events";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const requestedEvent = searchParams.get("event") || "";
  const [form, setForm] = useState({ name: "", email: "", eventId: requestedEvent });
  const [errors, setErrors] = useState({});

  function updateField(e) {
    const { name, value } = e.target;
    setForm(current => ({ ...current, [name]: value }));
    if (errors[name]) setErrors(current => ({ ...current, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    else if (form.name.trim().length < 2) nextErrors.name = "Name must be at least 2 characters.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email, such as name@example.com.";
    if (!form.eventId) nextErrors.eventId = "Please choose an event.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    const selectedEvent = events.find(event => event.id === form.eventId);
    navigate("/confirmation", { state: { name: form.name.trim(), email: form.email.trim(), eventTitle: selectedEvent.title } });
  }

  return (
    <main className="page-wrap register-layout">
      <section className="register-aside"><div className="eyebrow">SAVE YOUR SPOT</div><h1>Be part of<br /><span>the moment.</span></h1><p>One small registration. One new experience. Let's make it happen.</p><div className="aside-feature"><span>✦</span><div><strong>Find your community</strong><p>Meet people with similar interests.</p></div></div><div className="aside-feature"><span>↗</span><div><strong>Try something new</strong><p>Learn, create, and get involved.</p></div></div><div className="aside-quote">“The best campus memories start with showing up.”</div></section>
      <section className="form-panel"><div className="form-heading"><div className="eyebrow">EVENTHUB REGISTRATION</div><h2>Let's get you in.</h2><p>Fill in your details below to reserve your spot.</p></div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-field"><label htmlFor="name">Full name <span>*</span></label><input id="name" name="name" value={form.name} onChange={updateField} placeholder="e.g. Maria Santos" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <p className="error-message">{errors.name}</p>}</div>
          <div className="form-field"><label htmlFor="email">Email address <span>*</span></label><input id="email" type="email" name="email" value={form.email} onChange={updateField} placeholder="you@example.com" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email && <p className="error-message">{errors.email}</p>}</div>
          <div className="form-field"><label htmlFor="eventId">Choose an event <span>*</span></label><select id="eventId" name="eventId" value={form.eventId} onChange={updateField} aria-invalid={Boolean(errors.eventId)}><option value="">Select an event</option>{events.map(event => <option key={event.id} value={event.id}>{event.title} — {event.date}</option>)}</select>{errors.eventId && <p className="error-message">{errors.eventId}</p>}</div>
          <button type="submit" className="button button-primary submit-button">Complete registration <span>→</span></button>
          <p className="form-footnote">By registering, you're signing up for the selected campus event.</p>
        </form>
        <p className="form-back">Changed your mind? <Link to="/events">Browse events</Link></p>
      </section>
    </main>
  );
}