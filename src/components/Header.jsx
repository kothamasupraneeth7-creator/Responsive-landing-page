import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = ['Treatments', 'Locations', 'Contact'];

  return (
    <header className="top-header">
      <div className="inner">
        <div className="logo logo-brand">
          <img src="/images/logo.svg" alt="Clove Dental logo" className="logo-image" />
          <div className="logo-text">Clove Dental</div>
        </div>

        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((n) => (
              <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="btn btn-ghost" href="#contact">+91 999-999-9999</a>
            <a className="btn btn-accent" href="#book">Book Appointment</a>
          </div>
        </nav>

        <div className={`nav-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />

        <button className="hamburger" onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu">
          <span className={mobileOpen ? 'ham open' : 'ham'}></span>
        </button>
      </div>
    </header>
  );
}
