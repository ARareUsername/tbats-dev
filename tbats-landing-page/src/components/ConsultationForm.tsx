import { useEffect, useState, useRef, type ChangeEvent } from 'react';
import { useFetcher } from 'react-router';
import Section from '@components/ui/Section';
import Button from '@components/ui/Button';
import { Input, Textarea } from '@components/ui/Input';
import styles from './ConsultationForm.module.css';

const PH_PREFIX = '+63 ';

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').replace(/^63/, '').slice(0, 10);
  const groups = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 10)].filter(Boolean);
  return PH_PREFIX + groups.join(' ');
}

export default function ConsultationForm() {
  const fetcher = useFetcher<{ success?: boolean; error?: string }>();
  const formRef = useRef<HTMLFormElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState(PH_PREFIX);

  const submitting = fetcher.state === 'submitting';
  const actionData = fetcher.data;
  const errorMsg = actionData?.error || '';

  useEffect(() => {
    if (actionData?.success) {
      setSubmitted(true);
      formRef.current?.reset();
      setPhone(PH_PREFIX);
    }
  }, [actionData]);

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    if (!next.startsWith(PH_PREFIX)) {
      setPhone(formatPhone(next));
      return;
    }
    const typed = next.slice(PH_PREFIX.length).replace(/\D/g, '');
    setPhone(formatPhone(PH_PREFIX + typed));
  };

  return (
    <Section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          {/* Left: Contact Info */}
          <div className={styles.infoContainer}>
            <span className={`text-accent ${styles.infoLabel}`}>Get In Touch</span>
            <h2 className={`${styles.infoTitle} text-gradient`}>Let&apos;s Connect</h2>
            <p className={styles.infoDesc}>
              Have a question, a project in mind, or just want to say hello? Drop us a message, or
              reach out to us directly through the details below. We&apos;d love to chat.
            </p>

            <div className={styles.infoItemsList}>
              {/* Email */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
                    mail
                  </span>
                </div>
                <div>
                  <h4 className={styles.itemLabel}>Email Us</h4>
                  <a
                    href="mailto:hello@tbats.dev"
                    className={`clickable ${styles.hoverAccent} ${styles.itemLink}`}
                  >
                    hello@tbats.dev
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className={styles.itemLabel}>Our Studio</h4>
                  <p className={styles.itemValue}>Pampanga, Philippines</p>
                </div>
              </div>

              {/* Availability */}
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className={styles.itemLabel}>Availability</h4>
                  <p className={styles.itemValue}>
                    Mon – Fri, 9:00 AM – 6:00 PM{' '}
                    <span className={styles.itemValueAccent}>(GMT+8)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form inside its own Card wrapper */}
          <div className={`editorial-card card-spotlight ${styles.formCard}`}>
            {submitted && (
              <div className={`animate-fade-in ${styles.submittedOverlay}`} aria-live="polite">
                <span
                  className={`material-symbols-outlined ${styles.submittedIcon}`}
                  aria-hidden="true"
                >
                  check_circle
                </span>
                <h3 className={styles.submittedTitle}>Request Sent</h3>
                <p className={styles.submittedText}>
                  We will be in touch shortly to schedule your call.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={styles.dismissBtn}
                  aria-label="Send another request"
                >
                  Send Another Request
                </button>
              </div>
            )}

            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h3 className={`${styles.formTitle} text-gradient`}>Start a Project</h3>
                <p className={styles.formSubtitle}>
                  Fill out the form below to schedule your free consultation.
                </p>
              </div>

              <fetcher.Form
                method="post"
                action="/api/contact"
                ref={formRef}
                className={styles.formElement}
              >
                {/* Honeypot field to block automated spam bots */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="bot_field" tabIndex={-1} autoComplete="off" />
                </div>

                <div className={`grid-2 ${styles.formRow}`}>
                  <Input required type="text" id="user_name" name="user_name" label="Full Name" />
                  <Input required type="email" id="user_email" name="user_email" label="Email" />
                </div>

                <Input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  label="Phone Number"
                  value={phone}
                  onChange={onPhoneChange}
                  placeholder="+63 9XX XXX XXXX"
                  inputMode="numeric"
                  className={styles.phoneOverride}
                />

                <Textarea
                  required
                  id="project_desc"
                  name="project_desc"
                  rows={4}
                  label="Tell us about your business goals"
                  className={styles.textareaOverride}
                />

                {errorMsg && (
                  <div className={styles.errorMsg} aria-live="polite">
                    {errorMsg}
                  </div>
                )}

                <Button type="submit" disabled={submitting} className={styles.submitBtn}>
                  {submitting ? 'Sending Request...' : 'Start a Project'}
                </Button>
              </fetcher.Form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
