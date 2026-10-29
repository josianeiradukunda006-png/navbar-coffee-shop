import { useState } from "react";
import PageHeading from "../components/PageHeading";

function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="section page-section">
      <PageHeading eyebrow="SAVE YOUR SEAT" title="Table Reservations" description="Complete the form to send a sample reservation request." />
      <div className="form-layout">
        <div className="form-aside"><span>🪑</span><h2>Your table is waiting.</h2><p>For a real booking service, connect this form to a backend or booking API.</p><p><strong>Opening hours</strong><br />Every day · 8:00 AM – 8:00 PM</p></div>
        <form className="form-card" onSubmit={handleSubmit}>
          <label>Full name<input name="name" type="text" placeholder="Enter your name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Phone number<input name="phone" type="tel" placeholder="+250..." required /></label>
          <div className="form-row">
            <label>Guests<input name="guests" type="number" min="1" max="20" defaultValue="2" required /></label>
            <label>Date<input name="date" type="date" min={today} required /></label>
          </div>
          <label>Time<select name="time" required defaultValue=""><option value="" disabled>Select a time</option><option>09:00</option><option>11:00</option><option>13:00</option><option>15:00</option><option>17:00</option><option>19:00</option></select></label>
          <label>Special request<textarea name="notes" placeholder="Anything we should know? (optional)" /></label>
          <button type="submit">Send reservation request</button>
          {submitted && <p className="success-message" role="status">Your demo request has been received. No real booking has been saved.</p>}
        </form>
      </div>
    </section>
  );
}

export default Reservations;
