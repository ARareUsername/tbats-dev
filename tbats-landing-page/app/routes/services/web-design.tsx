import { useOutletContext } from 'react-router';
import Container from '@components/ui/Container';
import Section from '@components/ui/Section';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';

export function meta() {
  return [
    { title: 'Web Design & Development Services | tbats.dev' },
    {
      name: 'description',
      content:
        'Custom, high-performing website designs tailored specifically to grow your Pampanga-based business.',
    },
  ];
}

export default function WebDesignRoute() {
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
            Web Design
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
            Bespoke Web Design Services
          </h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6 }}>
            We create modern, interactive, and mobile-friendly websites designed around your goals.
            No templates, no bloat. Just fast, clean, high-converting digital products.
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
              Custom visual branding & wireframes
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.9 }}>
              <span className="material-symbols-outlined text-accent" aria-hidden="true">
                check
              </span>{' '}
              Blazing-fast loading times
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.9 }}>
              <span className="material-symbols-outlined text-accent" aria-hidden="true">
                check
              </span>{' '}
              Fully mobile-responsive layouts
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.9 }}>
              <span className="material-symbols-outlined text-accent" aria-hidden="true">
                check
              </span>{' '}
              Interactive animations & details
            </li>
          </ul>

          <div
            style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}
          >
            {openContactModal ? (
              <Button onClick={openContactModal} variant="primary">
                Start a Web Project
              </Button>
            ) : (
              <Button as="a" href="/contact" variant="primary">
                Start a Web Project
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
