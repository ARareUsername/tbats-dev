import Container from '@components/ui/Container';
import Section from '@components/ui/Section';
import Avatar from '@components/ui/Avatar';
import Badge from '@components/ui/Badge';
import styles from './about.module.css';

export function meta() {
  return [
    { title: 'About the Team | tbats.dev' },
    {
      name: 'description',
      content:
        'Meet the engineers, designers, and analysts behind tbats.dev. Learn our story and our philosophy on building fast, high-converting websites.',
    },
  ];
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  languages: string[];
}

const developers: TeamMember[] = [
  {
    id: 1,
    name: 'Karl Bondoc',
    role: 'Web Developer',
    initials: 'KB',
    languages: ['English', 'Tagalog', 'Kapampangan'],
  },
  {
    id: 2,
    name: 'Emmanuel Ken Almendra',
    role: 'Web Developer',
    initials: 'EA',
    languages: ['English', 'Tagalog', 'Kapampangan'],
  },
  {
    id: 3,
    name: 'Mark Angelo Mendoza',
    role: 'Web Developer',
    initials: 'MM',
    languages: ['English', 'Tagalog', 'Spanish'],
  },
  {
    id: 4,
    name: 'Daile Paragas',
    role: 'Web Developer',
    initials: 'DP',
    languages: ['English', 'Tagalog', 'French'],
  },
];

export default function AboutRoute() {
  return (
    <div className={styles.aboutPage}>
      {/* Header Section */}
      <Section className={styles.headerSection}>
        <Container>
          <div className={styles.headerSection}>
            <div className={styles.sinceBadge}>Since 2026</div>
            <h1 className={`${styles.title} text-gradient`}>
              The Digital Craftsmen Behind Your Next Website
            </h1>
            <p className={styles.description}>
              We build custom websites that convert visitors into active customers. No over-engineered
              code-bloat, no confusing developer jargon — just clean, high-performance design built
              to scale your business.
            </p>
          </div>
        </Container>
      </Section>

      {/* Meet the Team Grid Section */}
      <Section className={styles.teamSection}>
        <Container>
          <div className={styles.teamHeader}>
            <span className={styles.teamSubtitle}>Meet The Team</span>
            <h2 className={styles.teamTitle}>Real builders crafting real platforms</h2>
            <p className={styles.teamDesc}>
              A multilingual crew of designers, developers, and search analysts committed to design
              integrity and technical performance.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {developers.map(member => (
              <div key={member.id} className={`${styles.teamCard} card-spotlight`}>
                <div className={styles.avatarWrapper}>
                  <Avatar initials={member.initials} size="lg" className={styles.avatarImage} />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span className={styles.memberRole}>{member.role}</span>
                  <div className={styles.languagesWrapper}>
                    <span className={styles.languagesLabel}>Languages</span>
                    <div className={styles.languagesPills}>
                      {member.languages.map(lang => (
                        <Badge key={lang} variant="outline" className={styles.languagePill}>
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Story section */}
      <Section className={styles.storySection}>
        <Container>
          <div className={styles.storyGrid}>
            <div className={styles.storyMeta}>
              <h2 className={`${styles.storyHeading} text-gradient`}>Our Story</h2>
            </div>
            <div className={styles.storyBody}>
              <p className={`${styles.storyPara} ${styles.storyParaHighlight}`}>
                Born in Pampanga, we saw local businesses struggling with slow, template-based websites
                designed by agencies charging extortionate prices. We decided to build a different kind of
                agency — one focused on engineering, design integrity, and transparent subscription support.
              </p>
              <p className={styles.storyPara}>
                We believe speed is a feature, and accessibility is a right. A slow site loses customers
                before they even see your product. Our team eliminates bloated frameworks, themes, and
                unnecessary scripts to write clean React applications that load instantly and perform
                flawlessly on mobile devices.
              </p>
              <p className={styles.storyPara}>
                By choosing a monthly subscription model, you get a dedicated team of engineers, designers,
                and SEO specialists who update, manage, and scale your website every month. We eliminate the
                risk of massive upfront capital costs, helping local businesses compete at a premium level
                without additional fees.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
