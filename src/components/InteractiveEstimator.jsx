import React from 'react';
import { motion } from 'framer-motion';

const pricingTiers = [
  { name: "Starter", price: "₱29,000", desc: "Perfect for emerging businesses needing a professional web presence.", features: ["5 Pages", "Responsive Design", "Basic SEO", "Contact Form"] },
  { name: "Growth", price: "₱50,000", desc: "For scaling companies needing advanced functionality and CMS.", features: ["10 Pages", "CMS Integration", "Advanced SEO", "Analytics Dashboard"], highlight: true },
  { name: "Scale", price: "Custom", desc: "Full-scale web applications and bespoke digital platforms.", features: ["Unlimited Pages", "Custom Backend", "E-commerce", "Priority Support"] }
];

export default function InteractiveEstimator() {
  return (
    <section id="pricing" style={{ padding: '8rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Transparent <span className="text-accent">Pricing</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>No hidden fees. Just value-driven packages.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              style={{
                background: 'var(--bg-card)',
                border: tier.highlight ? '1px solid var(--color-accent)' : '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: tier.highlight ? '0 0 40px rgba(16, 185, 129, 0.1)' : 'none'
              }}
            >
              {tier.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--color-accent)',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>Most Popular</div>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>{tier.name}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>{tier.desc}</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>{tier.price}</div>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', flexGrow: 1 }}>
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}>check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={tier.highlight ? "btn-primary" : "btn-secondary"} style={{ width: '100%', justifyContent: 'center' }}>
                Start a Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
