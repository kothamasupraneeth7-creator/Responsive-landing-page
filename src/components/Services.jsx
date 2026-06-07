import React from 'react';
import './Services.css';

const services = [
  { title: 'Standard RCT', desc: 'Effective treatment for infected pulp using traditional methods for lasting results.', img: 'https://res.cloudinary.com/delqquzzb/image/upload/v1780809985/9_spwdbw.png' },
  { title: 'Laser RCT', desc: 'Advanced precision with laser-assisted cleaning for faster healing.', img: 'https://res.cloudinary.com/delqquzzb/image/upload/v1780810031/7_rmvrcd.png' },
  { title: 'Re-Treatment RCT', desc: 'Expert care for previously treated teeth that need attention.', img: 'https://res.cloudinary.com/delqquzzb/image/upload/v1780810071/8_xtl79k.png' },
];

export default function Services() {
  return (
    <section className="services" id="treatments">
      <div className="section-head">
        <h2>Types of Root Canal Treatments</h2>
        <p>We offer specialized root canal treatments tailored to your specific needs.</p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-media" style={{backgroundImage: `url(${s.img})`}} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a className="learn" href="#">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
