import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="badge">#1 DENTAL NETWORK IN INDIA</div>
        <h1>
          Your Smile,
          <br />
          <span className="accent">Our Passion.</span>
        </h1>
        <p className="lead">Advanced dental care with safety, precision, and compassion.
            Experience world-class dentistry with state-of-the-art technology.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-accent" href="#book">Book Consultation</a>
          <a className="btn btn-outline" href="#how">How we work</a>
        </div>
        <div className="trusted">Trusted by <strong>10,000+</strong> happy patients</div>
      </div>

      <div className="hero-right">
        <div className="portrait-card">
          <img src="https://res.cloudinary.com/delqquzzb/image/upload/v1780809856/4_p3rhvb.png" alt="Clove Dental hero" />
          <div className="portrait-badge">
            <div>Certified Safe</div>
            <small>100% Sterilized Equipment</small>
          </div>
        </div>
      </div>
    </section>
  );
}
