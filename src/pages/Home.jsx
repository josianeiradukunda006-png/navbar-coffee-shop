
import { Link } from "react-router-dom";
  import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO AROMA & BEAN</p>

          <h1>
            Every Cup Tells
            <span> a Story.</span>
          </h1>

          <p className="hero-description">
            Discover freshly brewed coffee, delicious treats,
            and a cozy place to relax with friends.
          </p>

          {/* MAIN CTA BUTTONS */}
          <div className="hero-buttons">
            <Link to="/menu" className="cta-button cta-primary">
              Explore Our Menu
            </Link>

            <Link
              to="/reservations"
              className="cta-button cta-secondary"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="home-services">
        <h2>Discover the Aroma Experience</h2>
        <p className="services-intro">
          Your favorite coffee moments start here.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3> Fresh Coffee</h3>
            <p>Enjoy coffee prepared with care and quality beans.</p>
            <Link to="/menu" className="text-cta">
              View Our Menu →
            </Link>
          </div>

          <div className="service-card">
            <h3> Special Events</h3>
            <p>Discover exciting events and special café experiences.</p>
            <Link to="/events" className="text-cta">
              Explore Events →
            </Link>
          </div>

          <div className="service-card">
            <h3> Customer Rewards</h3>
            <p>Discover our rewards program for café customers.</p>
            <Link to="/rewards" className="text-cta">
              Join Our Rewards →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="final-cta">
        <h2>Your Perfect Coffee Moment Awaits!</h2>
        <p>Visit Aroma & Bean and make today special.</p>

        <Link to="/contact" className="cta-button cta-white">
          Contact Us
        

<NavLink to="/reservations" className="cta-button">
  Book a Table
</NavLink>
        </Link>
      </section>

    </div>
  );
}

export default Home;
