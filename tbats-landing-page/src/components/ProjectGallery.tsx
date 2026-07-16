import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import styles from './ProjectGallery.module.css';

interface Project {
  name: string;
  industry: string;
  result: string;
  href: string;
  gradient: string;
}

const projects: Project[] = [
  {
    name: 'Boutique Coffee Co.',
    industry: 'Hospitality',
    result: '+40% online bookings',
    href: '/examples/blog/index.html',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 50%, #78350f 100%)',
  },
  {
    name: 'TechFlow',
    industry: 'SaaS / Technology',
    result: '3× faster load times',
    href: '/examples/portfolio/index.html',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e3a5f 100%)',
  },
  {
    name: 'Legacy Realty',
    industry: 'Real Estate',
    result: 'Delivered in 4 weeks',
    href: '/examples/blog/index.html',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #115e59 100%)',
  },
];

export default function ProjectGallery() {
  return (
    <Section id="portfolio" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={`text-accent ${styles.subtitle}`}>Our Work</span>
          <h2 className={`text-gradient ${styles.title}`}>Featured Projects</h2>
          <p className={styles.description}>
            Real results for real businesses. Each project is custom-built from scratch — no
            templates, no shortcuts.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${i === projects.length - 1 ? styles.cardFull : ''}`}
            >
              <div
                className={styles.image}
                style={{ background: project.gradient }}
                aria-hidden="true"
              />
              <div className={styles.body}>
                <span className={styles.industry}>{project.industry}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <span className={styles.result}>{project.result}</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
