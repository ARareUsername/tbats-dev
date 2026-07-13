import { m } from 'framer-motion';
import { tiers, carePlan, paymentTerms, launchOffer } from '../data/pricing';
import Section from '@components/ui/Section';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import styles from './InteractiveEstimator.module.css';

export default function InteractiveEstimator() {
  return (
    <Section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Transparent <span className="text-accent">Pricing</span>
          </h2>
          <p className={styles.subtitle}>No hidden fees. Just value-driven packages.</p>
        </div>

        {/* One-time project tiers */}
        <div className={styles.grid}>
          {tiers.map((tier, idx) => (
            <m.div
              key={idx}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 450, damping: 12 }}
              className={styles.tierMotionWrapper}
            >
              <Card
                variant="editorial"
                className={[styles.tierCard, tier.highlight ? styles.highlightedCard : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                {tier.highlight && <div className={styles.badge}>Most Popular</div>}
                <h3 className={styles.tierTitle}>{tier.name}</h3>
                <p className={styles.tierDesc}>{tier.desc}</p>
                <div className={styles.tierPrice}>{tier.price}</div>
                {tier.priceNote && <div className={styles.tierPriceNote}>{tier.priceNote}</div>}
                {!tier.priceNote && <div className={styles.spacer} />}

                <ul className={styles.benefitsList}>
                  {tier.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className={styles.benefitItem}>
                      <span className={`material-symbols-outlined ${styles.checkIcon}`} aria-hidden="true">
                        check_circle
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
                  as="a"
                  href="#contact"
                  variant={tier.highlight ? 'primary' : 'secondary'}
                  className={styles.ctaButton}
                >
                  Start a Project
                </Button>
              </Card>
            </m.div>
          ))}
        </div>

        {/* Recurring Care Plan — separate element, not bundled */}
        <Card className={styles.carePlanCard}>
          <span className={styles.carePlanBadge}>Ongoing Care · Billed Monthly</span>
          <h3 className={styles.carePlanTitle}>{carePlan.name}</h3>
          <div className={styles.carePlanPrice}>{carePlan.price}</div>
          <p className={styles.carePlanDesc}>{carePlan.desc}</p>
          <ul className={styles.carePlanBenefits}>
            {carePlan.benefits.map((benefit, bIdx) => (
              <li key={bIdx} className={styles.carePlanBenefitItem}>
                <span className={`material-symbols-outlined ${styles.checkIcon}`} aria-hidden="true">
                  check_circle
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </Card>

        {/* Payment + launch terms */}
        <div className={styles.termsWrapper}>
          <p className={styles.paymentTerms}>{paymentTerms}</p>
          <p className={styles.launchOffer}>{launchOffer}</p>
        </div>
      </div>
    </Section>
  );
}
