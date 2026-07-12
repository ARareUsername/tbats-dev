import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Karl Bondoc',
    role: 'Lead Web Engineer',
    initials: 'KB',
    bio: 'Spearheads technical architecture, crafting high-performance React applications with modular, scalable code structures.',
    focus: ['React', 'Vite', 'State Management', 'Bespoke Frameworks'],
    spanClass: 'span-3',
    socials: { linkedin: '#', github: '#' }
  },
  {
    id: 2,
    name: 'Emmanuel Ken Almendra',
    role: 'Lead UI/UX Architect',
    initials: 'EA',
    bio: 'Designs high-fidelity wireframes, fluid layout systems, and aesthetic interactions that bridge the gap between design and development.',
    focus: ['Figma', 'Art Direction', 'Visual Systems', 'Design Tokens'],
    spanClass: 'span-3',
    socials: { linkedin: '#', github: '#' }
  },
  {
    id: 3,
    name: 'Mark Angelo Mendoza',
    role: 'React Platform Specialist',
    initials: 'MM',
    bio: 'Specializes in building interactive web platforms, smooth animations, and solid frontend components.',
    focus: ['Tailwind CSS', 'Framer Motion', 'Component APIs', 'Fluid Layouts'],
    spanClass: 'span-2',
    socials: { linkedin: '#', github: '#' }
  },
  {
    id: 4,
    name: 'Daile Paragas',
    role: 'Performance & SEO Analyst',
    initials: 'DP',
    bio: 'Maintains optimal loading speeds, clean semantic code structures, and advanced Google search optimization strategies.',
    focus: ['Web Vitals', 'Semantic HTML', 'Google SEO', 'Analytics Pipelines'],
    spanClass: 'span-2',
    socials: { linkedin: '#', github: '#' }
  },
  {
    id: 5,
    name: 'Kyle Cyrill Lumacad',
    role: 'Systems & Backend Developer',
    initials: 'KL',
    bio: 'Architects secure backend integrations, form data submissions, database connectors, and API gateways.',
    focus: ['REST APIs', 'Node.js', 'Database Architecture', 'Security Standards'],
    spanClass: 'span-2',
    socials: { linkedin: '#', github: '#' }
  }
];

export default function Team() {
  return (
    <section id="about" style={{ background: 'transparent' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span 
            className="text-accent" 
            style={{ 
              fontSize: '0.9rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              fontWeight: 600 
            }}
          >
            The Team
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem', fontWeight: 600 }}>
            Our Specialists
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A tight-knit collective of design-minded builders dedicated to constructing exceptional digital products.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`team-card ${member.spanClass} editorial-card`}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between'
              }}
            >
              <div>
                <div className="team-avatar">
                  {member.initials}
                </div>
                
                <span 
                  style={{ 
                    color: 'var(--color-accent)', 
                    fontSize: '0.8rem', 
                    fontWeight: 500, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em' 
                  }}
                >
                  {member.role}
                </span>
                
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem', marginBottom: '1rem', fontWeight: 500 }}>
                  {member.name}
                </h3>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {member.bio}
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {member.focus.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.75rem',
                        background: 'var(--border-color)',
                        padding: '0.2rem 0.6rem',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="team-socials">
                  <a 
                    href={member.socials.linkedin} 
                    className="clickable"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <span className="material-symbols-outlined">link</span>
                  </a>
                  <a 
                    href={member.socials.github} 
                    className="clickable"
                    aria-label={`${member.name} GitHub`}
                  >
                    <span className="material-symbols-outlined">terminal</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
