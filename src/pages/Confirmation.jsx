import { Link, useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  return (
    <main className="page-wrap confirmation-wrap">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <div className="eyebrow">REGISTRATION COMPLETE</div>
        <h1>You're on the <span>list!</span></h1>
        {state?.name ? <p>Thanks, <strong>{state.name}</strong>. Your registration for <strong>{state.eventTitle}</strong> has been recorded in this demo.</p> : <p>Your registration was successful. We're excited to see you at the event!</p>}
        {state?.email && <div className="confirmation-detail"><span>REGISTERED EMAIL</span><strong>{state.email}</strong></div>}
        {state?.eventTitle && <div className="confirmation-detail"><span>YOUR EVENT</span><strong>{state.eventTitle}</strong></div>}
        <p className="demo-note">This is a class project demo. Registration details are not saved to a database or emailed.</p>
        <div className="hero-actions centered"><Link to="/events" className="button button-primary">Explore more events <span>→</span></Link><Link to="/" className="button button-ghost">Back home</Link></div>
      </div>
    </main>
  );
}