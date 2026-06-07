import React from 'react';
import './Safety.css';

const features = [
  {
    title: 'Advanced Sterilization',
    description: 'Hospital-grade hygiene standards.'
  },
  {
    title: '3D Imaging Technology',
    description: 'Complete view for accurate diagnosis.'
  },
  {
    title: 'Painless Procedures',
    description: 'State-of-the-art anesthesia delivery.'
  }
];

export default function Safety() {
  return (
    <section className="safety-section">
      <div className="safety-container">
        <div className="safety-media">
          <div className="safety-video-card">
            <div className="safety-video-frame">
              <button className="safety-play-button" aria-label="Play safety video">▶</button>
            </div>
            <div className="safety-overlay-card">
              <div className="safety-overlay-item">
                <span className="safety-overlay-value">10x</span>
                <span className="safety-overlay-label">SAFER</span>
              </div>
              <div className="safety-overlay-item">
                <span className="safety-overlay-value">45</span>
                <span className="safety-overlay-label">AVG TIME</span>
              </div>
            </div>
          </div>
        </div>

        <div className="safety-copy">
          <p className="safety-kicker">Safety, Precision, and Innovation</p>
          <h2 className="safety-heading">Safety, Precision, and Innovation</h2>
          <p className="safety-description">
            We employ 4-step sterilization protocols and use AI-assisted diagnostics to ensure 100% precision in every treatment.
          </p>

          <div className="safety-feature-list">
            {features.map((feature) => (
              <div key={feature.title} className="safety-feature-item">
                <div className="safety-feature-icon" aria-hidden="true">✓</div>
                <div>
                  <p className="safety-feature-title">{feature.title}</p>
                  <p className="safety-feature-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
