import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Me' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact Me' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="/myimg.jpeg" alt="Lakshika Nanthakumaran" className="navbar-logo-img" loading="lazy" />
          Lakshika Nanthakumaran
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end ?? false}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={`navbar-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end ?? false}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
