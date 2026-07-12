import { motion } from 'framer-motion';
import { tiers, carePlan, paymentTerms, launchOffer } from '../data/pricing';

export default function InteractiveEstimator() {
  return (
    <section id="pricing" style={{ background: 'transparent' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Transparent <span className="text-accent">Pricing</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            No hidden fees. Just value-driven packages.
          </p>
        </div>

        {/* One-time project tiers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.95, rotate: [0, -0.5, 0.5, -0.5, 0] }}
              transition={{ type: 'spring', stiffness: 450, damping: 12 }}
              style={{
                background: 'var(--bg-card)',
                border: tier.highlight ? '1px solid var(--color-accent)' : '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: tier.highlight ? '0 0 40px rgba(16, 185, 129, 0.1)' : 'none',
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--color-accent)',
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Most Popular
                </div>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>{tier.name}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                {tier.desc}
              </p>
              <div style={{ marginBottom: '0.25rem', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)' }}>
                {tier.price}
              </div>
              {tier.priceNote && (
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '2rem' }}>
                  {tier.priceNote}
                </div>
              )}
              {!tier.priceNote && <div style={{ marginBottom: '2rem' }} />}

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', flexGrow: 1 }}>
                {tier.benefits.map((benefit, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ color: 'var(--color-accent)', fontSize: '1.2rem', flexShrink: 0 }}
                    >
                      check_circle
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={tier.highlight ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Start a Project
              </a>
            </motion.div>
          ))}
        </div>

        {/* Recurring Care Plan — separate element, not bundled */}
        <div
          style={{
            marginTop: '2.5rem',
            background: 'var(--bg-card)',
            border: '1px dashed var(--color-accent)',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-accent)',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}
          >
            Ongoing Care · Billed Monthly
          </span>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', fontWeight: 600 }}>{carePlan.name}</h3>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
            {carePlan.price}
          </div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', marginBottom: '1.5rem' }}>{carePlan.desc}</p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
            }}
          >
            {carePlan.benefits.map((benefit, bIdx) => (
              <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-accent)', fontSize: '1.2rem', flexShrink: 0 }}>
                  check_circle
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment + launch terms */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.95rem' }}>{paymentTerms}</p>
          <p style={{ fontSize: '0.9rem', maxWidth: '640px', margin: '0 auto' }}>{launchOffer}</p>
        </div>
      </div>
    </section>
  );
}
