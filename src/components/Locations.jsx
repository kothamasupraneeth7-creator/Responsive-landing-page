import React from 'react';
import './Locations.css';

const clinics = [
  { name: 'Clove Dental - Connaught Place', addr: 'Connaught Place, New Delhi' },
  { name: 'Clove Dental - Andheri West', addr: 'Andheri West, Mumbai' },
  { name: 'Clove Dental - Banjara Hills', addr: 'Banjara Hills, Hyderabad' },
];

export default function Locations() {
  return (
    <section className="locations" id="locations">
      <h2>Find Us Across India</h2>
      <p>Over 350+ Clinics nationwide. Healthcare near you.</p>
      <div className="locations-grid">
        <div className="map-card">
          <img src="https://res.cloudinary.com/delqquzzb/image/upload/v1780809724/6_patplf.png" alt="Clinic locations map" />
          <div className="locator-card">
            <div className="locator-title">Clinic Locator</div>
            <input type="text" placeholder="Enter city or pin code" aria-label="Search clinics" />
            <div className="clinic-list">
              {clinics.map((c) => (
                <div key={c.name} className="clinic-item">
                  <strong>{c.name}</strong>
                  <div>{c.addr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
