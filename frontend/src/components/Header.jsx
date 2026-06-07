import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const handleNavClick = () => setOpen(false);

  return (
    <header className="header header--wide">
      <div className="container header-inner">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={handleNavClick}>
            <h1 className="brand">Reethu P</h1>
          </Link>
        </div>

        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="hamburger" />
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            <li>
              <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={handleNavClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active" className="nav-link" onClick={handleNavClick}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" className="nav-link" onClick={handleNavClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" className="nav-link" onClick={handleNavClick}>
                Contact
              </NavLink>
            </li>
            <li className="nav-cta">
              <a className="btn small" href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;