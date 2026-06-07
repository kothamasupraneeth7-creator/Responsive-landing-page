import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  { q: 'Is Root Canal treatment painful?', a: 'Most patients experience little to no pain thanks to modern anesthetics and techniques.' },
  { q: 'How many visits are required?', a: 'Typically 1-3 visits depending on the complexity of the case.' },
  { q: 'Do you accept insurance?', a: 'We accept many major insurance plans — contact us for details.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
            <button className="q" onClick={() => setOpen(open === i ? null : i)}>{f.q}</button>
            <div className="a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
