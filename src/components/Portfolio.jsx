import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Aether Finance',
    category: 'Fintech Platform',
    tags: ['React', 'Framer Motion', 'Tailwind', 'Recharts'],
    description: 'A premium wealth management interface featuring custom real-time data overlays and high-fidelity transitions.',
    link: '#',
    imageText: 'Æ'
  },
  {
    id: 2,
    title: 'Kroma Studio',
    category: 'Creative Portfolio',
    tags: ['Next.js', 'WebGL', 'Three.js', 'CSS Modules'],
    description: 'An immersive digital experience showcasing work for an award-winning creative director with 3D interactions.',
    link: '#',
    imageText: 'KR'
  },
  {
    id: 3,
    title: 'Novus Retail',
    category: 'Headless E-Commerce',
    tags: ['React', 'Vite', 'GraphQL', 'Shopify API'],
    description: 'A blazing fast storefront designed with instant page navigations and a bespoke checkout experience.',
    link: '#',
    imageText: 'NV'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="text-accent" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>Selected Work</span>
          <h2 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem' }} className="text-gradient">Featured Projects</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A curated selection of digital platforms crafted to exceed expectations in performance and design.
          </p>
        </div>

        <div className="grid-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="editorial-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div 
                  style={{
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '3rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'rgba(255, 255, 255, 0.2)',
                    userSelect: 'none'
                  }}
                >
                  {project.imageText}
                </div>
                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.75rem', marginTop: '0.25rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.2rem 0.6rem',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.6rem 1rem',
                    fontSize: '0.8rem'
                  }}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
