import { useEffect, useState, useRef } from 'react';
import { useFetcher } from 'react-router';
import Section from '@components/ui/Section';
import Button from '@components/ui/Button';
import { Input, Select, Textarea } from '@components/ui/Input';
import styles from './ConsultationForm.module.css';

export default function ConsultationForm() {
  const fetcher = useFetcher<{ success?: boolean; error?: string }>();
  const formRef = useRef<HTMLFormElement>(null);

  const [submitted, setSubmitted] = useState(false);

  const submitting = fetcher.state === 'submitting';
  const actionData = fetcher.data;
  const errorMsg = actionData?.error || '';

  useEffect(() => {
    if (actionData?.success) {
      setSubmitted(true);
      formRef.current?.reset();
    }
  }, [actionData]);

  return (
    <Section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={`editorial-card ${styles.editorialCard}`}>
          {submitted && (
            <div className={`animate-fade-in ${styles.submittedOverlay}`} aria-live="polite">
              <span className={`material-symbols-outlined ${styles.submittedIcon}`} aria-hidden="true">
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

          <div className={styles.contactGrid}>
            {/* Left: Contact Info */}
            <div className={styles.infoContainer}>
              <span className={`text-accent ${styles.infoLabel}`}>Get In Touch</span>
              <h2 className={styles.infoTitle}>Let&apos;s Connect</h2>
              <p className={styles.infoDesc}>
                Have a question, a project in mind, or just want to say hello? Drop us a message, or
                reach out to us directly through the details below. We&apos;d love to chat.
              </p>

              <div className={styles.infoItemsList}>
                {/* Email */}
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">mail</span>
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
                    <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">location_on</span>
                  </div>
                  <div>
                    <h4 className={styles.itemLabel}>Our Studio</h4>
                    <p className={styles.itemValue}>Pampanga, Philippines</p>
                  </div>
                </div>

                {/* Availability */}
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">schedule</span>
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

            {/* Right: Contact Form */}
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Start a Project</h3>
                <p className={styles.formSubtitle}>
                  Fill out the form below to schedule your free consultation.
                </p>
              </div>

              <fetcher.Form method="post" action="/api/contact" ref={formRef} className={styles.formElement}>
                {/* Honeypot field to block automated spam bots */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="bot_field" tabIndex={-1} autoComplete="off" />
                </div>

                <div className={`grid-2 ${styles.formRow}`}>
                  <Input required type="text" id="user_name" name="user_name" label="Name" />
                  <Input required type="email" id="user_email" name="user_email" label="Email" />
                </div>

                <Select
                  id="project_budget"
                  name="project_budget"
                  label="Budget Estimate"
                  className={styles.selectOverride}
                >
                  <option value="₱20,000 (Starter)" className={styles.selectOption}>
                    ₱20,000 (Starter)
                  </option>
                  <option value="₱49,000 (Growth)" className={styles.selectOption}>
                    ₱49,000 (Growth)
                  </option>
                  <option value="Custom / let's scope together" className={styles.selectOption}>
                    Custom / let&apos;s scope together
                  </option>
                </Select>

                <Textarea
                  required
                  id="project_desc"
                  name="project_desc"
                  rows={4}
                  label="Project Description"
                  className={styles.textareaOverride}
                />

                {errorMsg && <div className={styles.errorMsg} aria-live="polite">{errorMsg}</div>}

                <Button
                  type="submit"
                  disabled={submitting}
                  className={styles.submitBtn}
                >
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
