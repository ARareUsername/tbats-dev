import { Link } from 'react-router';
import { m } from 'framer-motion';
import useReducedMotion from '@hooks/useReducedMotion';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import styles from './ProjectGallery.module.css';

interface Project {
  name: string;
  industry: string;
  result: string;
  href: string;
  image: string;
  alt: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: 'Boutique Coffee Co.',
    industry: 'Hospitality',
    result: '+40% online bookings',
    href: 'https://example.com',
    image: '/images/projects/project-1.webp',
    alt: 'Abstract landing page concept for a boutique coffee brand',
    tags: ['UX Design', 'eCommerce', 'Speed'],
  },
  {
    name: 'TechFlow',
    industry: 'SaaS / Technology',
    result: '3× faster load times',
    href: 'https://example.com',
    image: '/images/projects/project-2.webp',
    alt: 'Abstract landing page concept for a SaaS product',
    tags: ['React', 'Tailwind', 'Performance'],
  },
  {
    name: 'Legacy Realty',
    industry: 'Real Estate',
    result: 'Delivered in 4 weeks',
    href: 'https://example.com',
    image: '/images/projects/project-3.webp',
    alt: 'Abstract landing page concept for a real estate agency',
    tags: ['Web App', 'Map API', 'Clean CSS'],
  },
  {
    name: 'Pampanga Dental',
    industry: 'Healthcare',
    result: '+150% patient inquiries',
    href: 'https://example.com',
    image: '/images/projects/project-4.webp',
    alt: 'Abstract landing page concept for a dental clinic',
    tags: ['Local SEO', 'Booking', 'Responsive'],
  },
  {
    name: 'GreenGrow Farms',
    industry: 'Agriculture',
    result: 'Seamless stock sync',
    href: 'https://example.com',
    image: '/images/projects/project-5.webp',
    alt: 'Abstract landing page concept for an agriculture business',
    tags: ['API Sync', 'Dashboard', 'Systems'],
  },
  {
    name: 'Peak Fitness',
    industry: 'Fitness',
    result: '200+ online signups',
    href: 'https://example.com',
    image: '/images/projects/project-6.webp',
    alt: 'Abstract landing page concept for a fitness brand',
    tags: ['CMS', 'Copywriting', 'Interactive'],
  },
];

export default function ProjectGallery() {
  const prefersReducedMotion = useReducedMotion();
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
            <m.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-spotlight ${styles.card}`}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: prefersReducedMotion ? 0.25 : 0.7,
                ease: 'easeOut',
                delay: prefersReducedMotion ? 0 : i * 0.08,
              }}
            >
              <img
                className={styles.image}
                src={project.image}
                alt={project.alt}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.industry}>{project.industry}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <span className={styles.result}>{project.result}</span>
                <div className={styles.tagsContainer}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </m.a>
          ))}
        </div>

        <div className={styles.footer}>
          <Button as={Link} to="/our-work" variant="primary">
            See Our Work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
