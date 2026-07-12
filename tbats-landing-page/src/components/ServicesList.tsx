import { motion } from 'framer-motion';

interface ServicePillar {
  id: number;
  title: string;
  icon: string;
  description: string;
  capabilities: string[];
}

const pillars: readonly ServicePillar[] = [
  {
    id: 1,
    title: 'Bespoke Design',
    icon: 'token',
    description: 'We craft unique, brand-specific digital designs from scratch. No templates, just pure creative layouts built to convert.',
    capabilities: [
      'Art Direction & Identity',
      'High-Fidelity Wireframes',
      'Interactive Prototyping',
      'Typography & UI Systems'
    ]
  },
  {
    id: 2,
    title: 'Custom Development',
    icon: 'code',
    description: 'Blazing-fast digital applications built using React, Vite, and Next.js. Clean, modular architectures with flawless transitions.',
    capabilities: [
      'React & Next.js Builds',
      'Advanced CSS/SVG Animations',
      'Headless CMS Integrations',
      'API & Backend Engineering'
    ]
  },
  {
    id: 3,
    title: 'SEO & Optimization',
    icon: 'speed',
    description: 'Achieve perfect lighthouse scores and search engine dominance with hyper-optimized, clean code implementations.',
    capabilities: [
      'Core Web Vitals Strategy',
      'Semantic HTML & Accessibility',
      'Page Load Speed Tuning',
      'Responsive Scaling Checks'
    ]
  }
] as const;

export default function ServicesList() {
  return (
    <section id="services" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="text-accent" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Expertise</span>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }} className="text-gradient">Our Capabilities</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            We combine high-end aesthetic vision with top-tier technical implementation to deliver award-winning websites.
          </p>
        </div>

        <div className="grid-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              className="editorial-card"
              whileHover={{ borderColor: 'rgba(255, 255, 255, 0.4)' }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%'
                    }}
                  >
                    <span className="material-symbols-outlined text-accent" style={{ fontSize: '1.5rem' }}>
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 500 }}>{pillar.title}</h3>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                  {pillar.description}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-primary)', opacity: 0.4, letterSpacing: '0.1em', marginBottom: '1rem' }}>
                  Core Competencies
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {pillar.capabilities.map((capability) => (
                    <li 
                      key={capability} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <span className="material-symbols-outlined text-accent" style={{ fontSize: '1rem' }}>
                        check
                      </span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}