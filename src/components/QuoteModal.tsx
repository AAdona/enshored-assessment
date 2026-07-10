// src/components/QuoteModal.tsx
"use client";

import { useForm, ValidationError } from "@formspree/react";
import Modal from "./Modal";
import { useQuoteModal } from "@/context/QuoteModalContext";
import styles from "./QuoteModal.module.css";

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [state, handleSubmit] = useForm("xqevvdow"); // reuse same form ID, or use a separate one if you want quote requests tracked separately in Formspree

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h2 className={styles.title}>Get A Quote</h2>
      <p className={styles.subtitle}>
        Tell us a bit about your project and we&apos;ll get back to you shortly.
      </p>

      {state.succeeded ? (
        <div className={styles.success}>
          <p className="text">Thank you! Your request has been sent successfully.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="quote-name">Name</label>
            <input id="quote-name" type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className={styles.group}>
            <label htmlFor="quote-email">Email Address</label>
            <input id="quote-email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className={styles.group}>
            <label htmlFor="quote-mobile">Mobile Number</label>
            <input
              id="quote-mobile"
              type="tel"
              name="mobile"
              pattern="[0-9+\-() ]{7,}"
              required
            />
            <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />
          </div>
          
          <div className={styles.group}>
            <label htmlFor="quote-message">Project Details</label>
            <textarea
              id="quote-message"
              name="message"
              rows={4}
              placeholder="Tell us a bit about what you need..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="button" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </Modal>
  );
}