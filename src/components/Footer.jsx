import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col footer-brand">
          <div className="logo">
            <img src="/images/logo.svg" alt="Clove Dental" className="logo-image" />
            <div className="logo-text">Clove Dental</div>
          </div>
          <p className="brand-copy">India's largest dental network committed to providing world-class dental care with a human touch.</p>
          <div className="socials">
            <a href="#" aria-label="website" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" stroke="#9aa8a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" aria-label="email" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5l9 6 9-6" stroke="#9aa8a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="#9aa8a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" aria-label="rss" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 019 9" stroke="#9aa8a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 5a15 15 0 0115 15" stroke="#9aa8a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="5" cy="19" r="1" fill="#9aa8a1"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col footer-links">
          <div className="col-title">Quick Links</div>
          <nav className="col-list">
            <a href="#about">About Us</a>
            <a href="#doctors">Our Doctors</a>
            <a href="#treatments">Treatments</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </nav>
        </div>

        <div className="footer-col footer-services">
          <div className="col-title">Our Services</div>
          <nav className="col-list">
            <a href="#treatments">Root Canal Treatment</a>
            <a href="#implants">Dental Implants</a>
            <a href="#whitening">Teeth Whitening</a>
            <a href="#braces">Braces & Aligners</a>
            <a href="#kids">Kids Dentistry</a>
          </nav>
        </div>

        <div className="footer-col footer-contact">
          <div className="col-title">Contact Us</div>
          <div className="contact-item">
            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12A9 9 0 0112 1a9 9 0 019 9z" stroke="#33d27a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div>RK Khanna Tennis Stadium, DLTA Complex, New Delhi</div>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 013 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.66.36 1.95.7 3.28a1 1 0 0 1-.24 1l-2.2 2.2a16 16 0 006.2 6.2l2.2-2.2a1 1 0 0 1 1-.24c1.33.34 2.62.58 3.28.7a1 1 0 0 1 .75 1V21z" stroke="#33d27a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div>+91-999-999-9999</div>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="#33d27a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="#33d27a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div>info@clovedental.in</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2023 Clove Dental. All rights reserved.</div>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
