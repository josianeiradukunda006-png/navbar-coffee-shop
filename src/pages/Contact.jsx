import { useState } from "react";
import PageHeading from "../components/PageHeading";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="section page-section">
      <PageHeading eyebrow="WE WOULD LOVE TO HEAR FROM YOU" title="Contact & Locations" description="Questions, feedback, or a special request? Send us a message." />
      <div className="contact-grid">
        <div className="contact-details">
          <article className="contact-card"><span></span><div><h3>Visit us</h3><p>Kigali, Rwanda</p><small>this is the location where you can find us.</small></div></article>
          <article className="contact-card"><span></span><div><h3>Opening hours</h3><p>Monday – Sunday</p><small>8:00 AM – 8:00 PM</small></div></article>
          <article className="contact-card"><span></span><div><h3>Email</h3><p>josianeiradukunda@gmail.com</p><small>you can reach us at any time.</small></div></article>
          <article className="contact-card"><span></span><div><h3>Phone</h3><p>+250 78654338</p><small>call us at any time.</small></div></article>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <label>Your name<input name="name" type="text" placeholder="Full name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Subject<select name="subject" defaultValue="General question"><option>General question</option><option>Menu question</option><option>Event enquiry</option><option>Feedback</option><option>Other</option></select></label>
          <label>Message<textarea name="message" placeholder="Write your message here..." required /></label>
          <button type="submit">Send message</button>
          {sent && <p className="success-message" role="status">Thank you! Your demo message has been submitted on this page.</p>}
        </form>
      </div>
      <div className="map-placeholder"><span></span><div><h3>Find our café</h3><p>Kigali, Rwanda</p></div></div>
    </section>
  );
}

export default Contact;
