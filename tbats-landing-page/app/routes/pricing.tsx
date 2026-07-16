import { Link } from 'react-router';
import FAQAccordion from '@components/FAQAccordion';
import styles from './pricing.module.css';

export function meta() {
  return [
    { title: 'Pricing & Subscription Plans | tbats.dev' },
    {
      name: 'description',
      content:
        'Get a professional custom website with local Peso monthly pricing. No upfront fees, cancel anytime. Starter, Growth, and Merchant plans.',
    },
  ];
}

interface PlanBenefit {
  text: string;
  tooltip?: string;
}

interface SubscriptionPlan {
  id: 'starter' | 'growth' | 'merchant';
  name: string;
  price: string;
  desc: string;
  popular?: boolean;
  benefits: PlanBenefit[];
}

const plans: SubscriptionPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    price: '₱1,499',
    desc: 'Perfect for local brands needing a high-end single-page online presence.',
    benefits: [
      { text: 'Custom responsive website' },
      { text: 'Domain, hosting, SSL & security' },
      {
        text: '1 Google Workspace Email',
        tooltip: 'A professional business email (you@yourdomain.com) running on Google’s secure servers instead of a basic gmail.com address.',
      },
      {
        text: 'ADA/accessibility compliant',
        tooltip: 'Your website is structured for screen readers and keyboard use, helping disabled users and keeping you compliant with accessibility guidelines.',
      },
      { text: '10 content updates per month' },
      { text: 'Speed optimized' },
      { text: 'Basic SEO setup' },
      { text: 'Basic analytics' },
      { text: 'Monthly uptime monitoring' },
      { text: '1 hour of monthly developer support' },
    ],
  },
  {
    id: 'growth',
    name: 'Growth Plan',
    price: '₱2,999',
    desc: 'Our most popular plan for businesses wanting a standard multi-page website.',
    popular: true,
    benefits: [
      { text: 'Everything in Starter Plan' },
      { text: 'Custom responsive multi-page website (up to 8 pages)' },
      {
        text: '1 Google Workspace Email',
        tooltip: 'A professional business email (you@yourdomain.com) running on Google’s secure servers instead of a basic gmail.com address.',
      },
      {
        text: 'ADA/accessibility compliant',
        tooltip: 'Your website is structured for screen readers and keyboard use, helping disabled users and keeping you compliant with accessibility guidelines.',
      },
      { text: 'Standard SEO setup & keyword mapping' },
      { text: 'Basic analytics & traffic dashboards' },
      { text: 'Standard e-commerce & shop catalog setup' },
      { text: '3 hours of monthly developer support' },
    ],
  },
  {
    id: 'merchant',
    name: 'Merchant Plan',
    price: '₱5,999',
    desc: 'Your full digital team, on demand. Perfect for full e-commerce web stores.',
    benefits: [
      { text: 'Everything in Growth Plan' },
      {
        text: 'Custom software development',
        tooltip: 'Tailor-made features built for your workflows, such as user login portals, booking calendars, custom databases, or API integrations.',
      },
      { text: 'One team managing every website, storefront & listing' },
      {
        text: '5 Google Workspace Emails',
        tooltip: 'Up to 5 professional custom email addresses for your team members run by Google Workspace.',
      },
      {
        text: 'Google Business management',
        tooltip: 'We setup and manage your Google Maps listing, reviews, and search profile to help locals find your storefront.',
      },
      { text: 'Custom SEO strategy & keyword execution' },
      { text: 'AI chatbot or custom workflow automation' },
      { text: 'Advanced Google Analytics & custom dashboard' },
      { text: 'Dedicated account manager' },
      { text: 'Same-day emergency support' },
      { text: '5 hours of monthly developer support' },
    ],
  },
];

const standardInclusions = [
  {
    icon: 'palette',
    title: 'Custom Design',
    desc: 'No templates. Every site is designed from scratch specifically for your brand and business goals.',
  },
  {
    icon: 'dns',
    title: 'Domain, Hosting & Security',
    desc: 'Custom domain, fast SSD hosting, SSL certificate, daily backups, and proactive security monitoring.',
  },
  {
    icon: 'phone_iphone',
    title: 'Mobile Responsive',
    desc: 'Your site looks and works flawlessly on every device — phones, tablets, and desktops.',
  },
  {
    icon: 'support_agent',
    title: 'Ongoing Support',
    desc: 'Text or email us anytime. We respond rapidly and handle all updates so you never worry about your site.',
  },
];

export default function PricingRoute() {
  return (
    <div className={styles.pricingPage}>
      {/* Hero Section */}
      <div className={`${styles.heroSection} ${styles.headerSection}`}>
        <span className={styles.subtitle}>Fair & Transparent Pricing</span>
        <h1 className={styles.title}>Stop losing potential clients to a slow, outdated website</h1>
        <p className={styles.description}>
          Most traditional agencies charge ₱15,000 to ₱30,000 upfront to build your site. We
          don&apos;t. Get a professionally designed, speed-optimized, and fully managed website for
          one transparent monthly fee.
        </p>
      </div>

      {/* Plans Matrix Grid */}
      <div className={styles.plansGrid}>
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`card-spotlight ${styles.planCard} ${plan.popular ? styles.growthCard : ''}`}
          >
            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

            <div className={styles.planHeader}>
              <h2 className={`${styles.planName} ${plan.popular ? styles.glowText : ''}`}>
                {plan.name}
              </h2>
              <div className={styles.priceWrapper}>
                <span className={styles.priceSymbol}>₱</span>
                <span className={styles.priceAmount}>
                  {plan.price.replace('₱', '').replace(',', '')}
                </span>
                <span className={styles.pricePeriod}>/mo</span>
              </div>
              <p className={styles.planDesc}>{plan.desc}</p>
            </div>

            <hr className={styles.divider} />

            <ul className={styles.benefitsList}>
              {plan.benefits.map((benefit, idx) => (
                <li key={idx} className={styles.benefitItem}>
                  <span className={`material-symbols-outlined ${styles.checkIcon}`}>
                    check_circle
                  </span>
                  <span>
                    {benefit.text}
                    {benefit.tooltip && (
                      <button
                        type="button"
                        className={styles.tooltipWrapper}
                        aria-label={benefit.tooltip}
                      >
                        <span className={`material-symbols-outlined ${styles.tooltipIcon}`}>
                          info
                        </span>
                        <span className={styles.tooltipBubble} role="tooltip">
                          {benefit.tooltip}
                        </span>
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className={`${styles.planButton} ${plan.popular ? styles.buttonPrimary : styles.buttonSecondary}`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* Cancellation policy note */}
      <div className={styles.cancellationSection}>
        <p className={styles.cancellationText}>
          &ldquo;Zero lock-in contracts. Cancel anytime. Our clients stay because they love their
          high-converting sites, not because they are tied down by paperwork.&rdquo;
        </p>
      </div>

      {/* Need something different block */}
      <div className={styles.customPackageSection}>
        <div className={`card-spotlight ${styles.customCard}`}>
          <div className={styles.customContent}>
            <h3 className={styles.customTitle}>Need Something Different?</h3>
            <p className={styles.customDesc}>
              Looking for bespoke corporate platforms, complex application integrations, or unique
              design assets? Let&apos;s map out a tailored package custom-fit for your operations.
            </p>
          </div>
          <Link className={styles.customCta} to="/contact">
            Get Started
            <span className={`material-symbols-outlined ${styles.arrowIcon}`}>arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* Every Plan Includes Section */}
      <div className={styles.inclusionsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Every Plan Includes</h2>
          <p className={styles.sectionDesc}>
            Stop paying extra for things that should be standard. Other agencies bill separately for
            hosting, SSL certificates, and monthly updates. We include them all.
          </p>
        </div>
        <div className={styles.inclusionsGrid}>
          {standardInclusions.map((inclusion, idx) => (
            <div key={idx} className={`card-spotlight ${styles.inclusionCard}`}>
              <div className={styles.inclusionIconWrapper}>
                <span className="material-symbols-outlined">{inclusion.icon}</span>
              </div>
              <h3 className={styles.inclusionTitle}>{inclusion.title}</h3>
              <p className={styles.inclusionDesc}>{inclusion.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <FAQAccordion />
      </div>
    </div>
  );
}
