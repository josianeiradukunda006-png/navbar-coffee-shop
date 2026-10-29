import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section page-section empty-state">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="button" to="/">Return home</Link>
    </section>
  );
}

export default NotFound;
