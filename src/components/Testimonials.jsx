import React from "react";
import "./Testimonials.css";

const data = [
  {
    id: 1,
    score: "99",
    quote:
      "I was terrified of the dentist, but Clove Dental changed everything. The Laser RCT was painless and quick!",
    name: "Priya Sharma",
    role: "Laser RCT Patient",
    avatar: "https://res.cloudinary.com/delqquzzb/image/upload/v1780811307/10_nswvbc.png"
  },
  {
    id: 2,
    score: "99",
    quote:
      "The precision and care taken during my implant procedure were outstanding. Highly recommended!",
    name: "Rahul Verma",
    role: "Implant Patient",
    avatar: "https://res.cloudinary.com/delqquzzb/image/upload/v1780811336/11_tszgdw.png"
  },
  {
    id: 3,
    score: "99",
    quote:
      "My smile makeover is incredible. The doctors explained every step and made me feel so comfortable.",
    name: "Anjali Gupta",
    role: "Cosmetic Dentistry",
    avatar: "https://res.cloudinary.com/delqquzzb/image/upload/v1780811368/12_icnsxl.png"
  }
];

const Star = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#FFCC33"
    aria-hidden="true"
    className="testimonial-star"
  >
    <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L19.336 24 12 19.897 4.664 24l1.636-8.69L.6 9.75l7.732-1.732z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-kicker">SUCCESS STORIES</div>
          <h2 className="testimonials-title">Real Smiles, Real Transformations</h2>
          <p className="testimonials-subtitle">
            See the life-changing results our patients experience every day.
          </p>
        </div>

        <div className="testimonials-grid">
          {data.map((t) => (
            <article key={t.id} className="testimonials-card">
              <div className="testimonials-badge">{t.score}</div>

              <div className="testimonials-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

              <blockquote className="testimonials-quote">"{t.quote}"</blockquote>

              <div className="testimonials-footer">
                <img src={t.avatar} alt={t.name} className="testimonials-avatar" />
                <div className="testimonials-meta">
                  <div className="testimonials-name">{t.name}</div>
                  <div className="testimonials-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
