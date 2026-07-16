import { useOutletContext } from 'react-router';
import Container from '@components/ui/Container';
import Section from '@components/ui/Section';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';

export function meta() {
  return [
    { title: 'Case Studies & Success Stories | tbats.dev' },
    {
      name: 'description',
      content:
        'Read detailed success stories about how we helped businesses optimize workflows and drive growth.',
    },
  ];
}

const caseStudies = [
  {
    title: 'Boutique Coffee Co. eCommerce Transformation',
    client: 'Boutique Coffee Co.',
    solution:
      'Designed and built a custom React SPA optimized for speed, integrated with dynamic booking widget and client calendar.',
  },
  {
    title: 'SaaS Platform Performance Audit & Overhaul',
    client: 'TechFlow',
    solution:
      'Audited bundles, restructured Webpack/Vite chunks, introduced image optimizations and lazy loading to boost speed by 3x.',
  },
];

export default function CaseStudiesRoute() {
  const context = useOutletContext<{ openContactModal?: () => void } | null>();
  const openContactModal = context?.openContactModal;

  return (
    <Section style={{ padding: '8rem 0' }}>
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
            Success Stories
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
            Case Studies
          </h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.8 }}>
            Deep dive into technical execution details and project goals for our client
            partnerships.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {caseStudies.map(cs => (
            <Card key={cs.title} variant="editorial" style={{ padding: '2.5rem' }}>
              <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.5rem' }}>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', opacity: 0.6 }}>
                  Client: {cs.client}
                </span>
                <h2 style={{ fontSize: '1.75rem', margin: '0.5rem 0', fontWeight: 600 }}>
                  {cs.title}
                </h2>
                <p style={{ fontSize: '1.05rem', marginTop: '1rem', lineHeight: 1.6 }}>
                  <strong>Our Solution:</strong> {cs.solution}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button as="a" href="/our-work" variant="secondary">
            Back to Work Catalog
          </Button>
          {openContactModal ? (
            <Button onClick={openContactModal} variant="primary">
              Start a Project With Us
            </Button>
          ) : (
            <Button as="a" href="/contact" variant="primary">
              Start a Project With Us
            </Button>
          )}
        </div>
      </Container>
    </Section>
  );
}
