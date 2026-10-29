import { useState } from "react";
import PageHeading from "../components/PageHeading";

const events = [
  { id: 1, title: "Latte Art Workshop", type: "Workshop", date: "2026-11-15", time: "10:00 AM", description: "Learn simple patterns and milk-pouring techniques." },
  { id: 2, title: "Coffee Cupping", type: "Tasting", date: "2026-11-21", time: "2:00 PM", description: "Explore the aromas and flavours of different coffees." },
  { id: 3, title: "Home Brewing Basics", type: "Workshop", date: "2026-11-28", time: "11:00 AM", description: "Learn practical ways to brew better coffee at home." }
];

function Events() {
  const [type, setType] = useState("All");
  const visibleEvents = events.filter((event) => type === "All" || event.type === type);

  return (
    <section className="section page-section">
      <PageHeading eyebrow="LEARN & CONNECT" title="Events & Workshops" description="Join a session, discover coffee, and meet other coffee lovers." />
      <div className="filters compact">
        <label htmlFor="event-type">Filter events:</label>
        <select id="event-type" value={type} onChange={(e) => setType(e.target.value)}>
          <option>All</option><option>Workshop</option><option>Tasting</option>
        </select>
      </div>
      <div className="event-list">
        {visibleEvents.map((event) => (
          <article className="event-card" key={event.id}>
            <div className="event-date"><strong>{new Date(`${event.date}T12:00:00`).getDate()}</strong><span>{new Date(`${event.date}T12:00:00`).toLocaleString("en", { month: "short" })}</span></div>
            <div className="event-info"><span className="tag">{event.type}</span><h3>{event.title}</h3><p>{event.description}</p><small>{event.date} · {event.time}</small></div>
            <a className="text-link" href="/contact">Ask about event →</a>
          </article>
        ))}
      </div>
      <p className="demo-note">Event dates are examples. Update them to match your actual schedule.</p>
    </section>
  );
}

export default Events;
