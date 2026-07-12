import Card from '@components/ui/Card';
import Avatar from '@components/ui/Avatar';
import Badge from '@components/ui/Badge';
import Section from '@components/ui/Section';
import Container from '@components/ui/Container';
import styles from './Team.module.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  bio: string;
  focus: readonly string[];
  spanClass: 'span-3' | 'span-2';
  socials: {
    linkedin: string;
    github: string;
  };
}

const teamMembers: readonly TeamMember[] = [
  {
    id: 1,
    name: 'Karl Bondoc',
    role: 'Lead Web Engineer',
    initials: 'KB',
    bio: 'Spearheads technical architecture, crafting high-performance React applications with modular, scalable code structures.',
    focus: ['React', 'Vite', 'State Management', 'Bespoke Frameworks'] as const,
    spanClass: 'span-3',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 2,
    name: 'Emmanuel Ken Almendra',
    role: 'Lead UI/UX Architect',
    initials: 'EA',
    bio: 'Designs high-fidelity wireframes, fluid layout systems, and aesthetic interactions that bridge the gap between design and development.',
    focus: ['Figma', 'Art Direction', 'Visual Systems', 'Design Tokens'] as const,
    spanClass: 'span-3',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 3,
    name: 'Mark Angelo Mendoza',
    role: 'React Platform Specialist',
    initials: 'MM',
    bio: 'Specializes in building interactive web platforms, smooth animations, and solid frontend components.',
    focus: ['Tailwind CSS', 'Framer Motion', 'Component APIs', 'Fluid Layouts'] as const,
    spanClass: 'span-2',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 4,
    name: 'Daile Paragas',
    role: 'Performance & SEO Analyst',
    initials: 'DP',
    bio: 'Maintains optimal loading speeds, clean semantic code structures, and advanced Google search optimization strategies.',
    focus: ['Web Vitals', 'Semantic HTML', 'Google SEO', 'Analytics Pipelines'] as const,
    spanClass: 'span-2',
    socials: { linkedin: '#', github: '#' },
  },
  {
    id: 5,
    name: 'Kyle Cyrill Lumacad',
    role: 'Systems & Backend Developer',
    initials: 'KL',
    bio: 'Architects secure backend integrations, form data submissions, database connectors, and API gateways.',
    focus: ['REST APIs', 'Node.js', 'Database Architecture', 'Security Standards'] as const,
    spanClass: 'span-2',
    socials: { linkedin: '#', github: '#' },
  },
] as const;

export default function Team() {
  return (
    <Section id="about">
      <Container>
        <div className={styles.header}>
          <span className={`text-accent ${styles.subtitle}`}>The Team</span>
          <h2 className={styles.title}>Our Specialists</h2>
          <p className={styles.description}>
            A tight-knit collective of design-minded builders dedicated to constructing exceptional
            digital products.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map(member => (
            <Card
              key={member.id}
              variant="team"
              className={`${styles.teamCard} ${styles[member.spanClass]} editorial-card ${styles.cardWrapper}`}
            >
              <div>
                <Avatar initials={member.initials} size="md" className={styles.teamAvatar} />

                <span className={styles.memberRole}>{member.role}</span>

                <h3 className={styles.memberName}>{member.name}</h3>

                <p className={styles.memberBio}>{member.bio}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.skillsContainer}>
                  {member.focus.map(skill => (
                    <Badge key={skill} variant="default" className={styles.skillBadge}>
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className={styles.teamSocials}>
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
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
