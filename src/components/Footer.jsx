import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <h2>Aroma & Bean</h2>
        <p>Fresh coffee, warm moments, and community.</p>
      </div>
      <div className="footer-links">
        <Link to="/menu">Our menu</Link>
        <Link to="/reservations">Book a table</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/footer-info">Privacy & terms</Link>
      </div>
      <p className="copyright">© 2026 Aroma & Bean Café. </p>
    </footer>
  );
}

export default Footer;
