import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    ["Home", "/"],
    ["Menu", "/menu"],
    ["Roastery", "/roastery"],
    ["About", "/about"],
    ["Events", "/events"],
    ["Rewards", "/rewards"],
    ["Reservations", "/reservations"],
    ["Contact", "/contact"],
    ["directory","/directory"]
  ];

  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="Aroma and Bean home">
        <span className="brand-icon">☕</span>
        <span>Aroma <em>&</em> Bean</span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map(([label, path]) => (
          <NavLink key={path} to={path} end={path === "/"}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
