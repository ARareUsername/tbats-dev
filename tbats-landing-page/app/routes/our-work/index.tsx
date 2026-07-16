import Container from '@components/ui/Container';
import Section from '@components/ui/Section';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';

export function meta() {
  return [
    { title: 'Our Work | tbats.dev' },
    {
      name: 'description',
      content:
        'Explore our portfolio of premium web development projects and deep-dive case studies.',
    },
  ];
}

const projects = [
  {
    name: 'Boutique Coffee Co.',
    industry: 'Hospitality',
    result: '+40% online bookings',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 50%, #78350f 100%)',
  },
  {
    name: 'TechFlow',
    industry: 'SaaS / Technology',
    result: '3× faster load times',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e3a5f 100%)',
  },
  {
    name: 'Legacy Realty',
    industry: 'Real Estate',
    result: 'Delivered in 4 weeks',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #115e59 100%)',
  },
  {
    name: 'Pampanga Dental',
    industry: 'Healthcare',
    result: '+150% patient inquiries',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 50%, #831843 100%)',
  },
  {
    name: 'GreenGrow Farms',
    industry: 'Agriculture',
    result: 'Seamless stock sync',
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 50%, #064e3b 100%)',
  },
  {
    name: 'Peak Fitness',
    industry: 'Fitness',
    result: '200+ online signups',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 50%, #7f1d1d 100%)',
  },
];

export default function OurWorkRoute() {
  return (
    <Section>
      <Container>
        <div
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}
        >
          <span
            className="text-accent"
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Portfolio
          </span>
          <h1
            className="text-gradient"
            style={{
              fontSize: '3rem',
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
              fontWeight: 700,
            }}
          >
            Our Digital Catalog
          </h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.8 }}>
            Explore our case studies and full showcase of custom web solutions built for speed,
            conversion, and stunning aesthetics.
          </p>
          <div
            style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            <Button as="a" href="/our-work/case-studies" variant="primary">
              View Case Studies
            </Button>
            <Button as="a" href="/our-work/portfolio" variant="secondary">
              View Full Portfolio
            </Button>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
          }}
        >
          {projects.map(project => (
            <Card
              key={project.name}
              variant="editorial"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div style={{ background: project.gradient, height: '200px', width: '100%' }} />
              <div
                style={{
                  padding: '1.5rem',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      opacity: 0.6,
                      fontWeight: 600,
                    }}
                  >
                    {project.industry}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0', fontWeight: 600 }}>
                    {project.name}
                  </h3>
                </div>
                <span className="text-accent" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                  {project.result}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
