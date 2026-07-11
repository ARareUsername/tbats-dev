import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Briefing',
    subtitle: 'Defining the Scope',
    desc: 'We kick off with a deep dive into your business model, goals, and target audience to establish a precise blueprint and visual direction.',
    icon: 'search'
  },
  {
    number: '02',
    title: 'Bespoke UI/UX Design',
    subtitle: 'Editorial Mockups',
    desc: 'We prototype custom user flows and high-fidelity mockups. Every detail is custom-tailored to reflect your brand identity and maximize conversions.',
    icon: 'palette'
  },
  {
    number: '03',
    title: 'Interactive Development',
    subtitle: 'High-Performance Engineering',
    desc: 'We transform designs into clean React code. Implementing robust, modular architecture with fluid animations powered by Framer Motion.',
    icon: 'terminal'
  },
  {
    number: '04',
    title: 'Core Web Vitals Optimization',
    subtitle: 'Speed & SEO Audit',
    desc: 'We optimize every asset and line of code for sub-second load times, maximizing accessibility, responsive fidelity, and search engine readiness.',
    icon: 'bolt'
  },
  {
    number: '05',
    title: 'Deployment & Launch Handoff',
    subtitle: 'IP Rights & Handover',
    desc: 'We configure domains, spin up hosting servers, and completely hand over the production-ready git repository and design files.',
    icon: 'rocket_launch'
  }
];

export default function ClientTimeline() {
  return (
    <section id="process" style={{ background: '#000000' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="text-accent" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Timeline</span>
          <h2 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem' }} className="text-gradient">How We Work</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            A structured, transparent development methodology designed to take your concept to production in weeks.
          </p>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Vertical timeline line */}
          <div 
            style={{ 
              position: 'absolute', 
              left: '35px', 
              top: '20px', 
              bottom: '20px', 
              width: '1px', 
              background: 'linear-gradient(to bottom, var(--color-accent) 0%, rgba(255,255,255,0.05) 100%)',
              zIndex: 1
            }} 
          />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: 'flex',
                gap: '2rem',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Step number bubble */}
              <div 
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'var(--bg-dark)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  boxShadow: '0 0 15px rgba(0,0,0,0.5)'
                }}
                className="step-bubble"
              >
                <span className="text-accent">{step.number}</span>
              </div>

              {/* Step content card */}
              <div 
                className="editorial-card" 
                style={{ 
                  flexGrow: 1, 
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>{step.title}</h3>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {step.subtitle}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-accent" style={{ fontSize: '1.5rem', opacity: 0.8 }}>
                    {step.icon}
                  </span>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
