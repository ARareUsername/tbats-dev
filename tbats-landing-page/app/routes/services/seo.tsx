import { useOutletContext } from 'react-router';
import Container from '@components/ui/Container';
import Section from '@components/ui/Section';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';

export function meta() {
  return [
    { title: 'Search Engine Optimization (SEO) | tbats.dev' },
    {
      name: 'description',
      content:
        'Drive organic search traffic to your business website with Pampanga SEO specialists.',
    },
  ];
}

export default function SeoRoute() {
  const context = useOutletContext<{ openContactModal?: () => void } | null>();
  const openContactModal = context?.openContactModal;

  return (
    <Section style={{ padding: '8rem 0' }}>
      <Container>
        <div
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}
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
            SEO & Growth
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
            Search Engine Optimization
          </h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6 }}>
            Ensure your local or international customers can find you. We optimize load speeds,
            metadata structures, and build search-friendly content architectures that rank.
          </p>
        </div>

        <Card
          variant="editorial"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem' }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            Core Capabilities
          </h2>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.9 }}>
              <span className="material-symbols-outlined text-accent" aria-hidden="true">
                check
              </span>{' '}
              Local SEO (Google Maps & Search)
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.9 }}>
              <span className="material-symbols-outlined text-accent" aria-hidden="true">
                check
              </span>{' '}
              Technical audit & Core Web Vitals optimization
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.9 }}>
              <span className="material-symbols-outlined text-accent" aria-hidden="true">
                check
              </span>{' '}
              Semantic HTML & Structured Data / Schema
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.9 }}>
              <span className="material-symbols-outlined text-accent" aria-hidden="true">
                check
              </span>{' '}
              Conversion rate optimization insights
            </li>
          </ul>

          <div
            style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            {openContactModal ? (
              <Button onClick={openContactModal} variant="primary">
                Start Ranking Today
              </Button>
            ) : (
              <Button as="a" href="/contact" variant="primary">
                Start Ranking Today
              </Button>
            )}
            <Button as="a" href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
