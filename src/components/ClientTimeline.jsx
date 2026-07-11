import React from 'react';

export default function ClientTimeline() {
  const steps = [
    { num: '01', title: 'Specs & Discovery', desc: 'We discuss your business goals, target audience, and website specifications to create a concrete blueprint.' },
    { num: '02', title: 'High-Fidelity Design', desc: 'Our designers draft sleek mockups with matching typography and layouts. You see exactly what your website will look like.' },
    { num: '03', title: 'Interactive Development', desc: 'We turn the approved design into a fast, responsive, and robust website using modern technology.' },
    { num: '04', title: 'Optimization & Polish', desc: 'We fine-tune load times, check cross-device compatibility, and polish animations for a flawless experience.' },
    { num: '05', title: 'Launch & Support', desc: 'We push your site live and provide training or ongoing support so you can manage it with ease.' }
  ];

  return (
    <section id="process" style={{ background: 'var(--bg-dark-end)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>How We Work</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A proven, transparent 5-step process designed to take your idea from specification to a live, high-converting reality.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          {steps.map((step, index) => (
            <div key={index} className="editorial-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '3rem', 
                fontWeight: 800, 
                color: 'var(--color-silver)',
                opacity: 0.5,
                lineHeight: 1
              }}>
                {step.num}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
