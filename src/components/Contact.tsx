"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xqevvdow");

  return (
    <section className={styles.contact}>
      <div className={`${styles.contact__container} container`}>
        <div className={styles.contact__info}>
          <span className="section__title section__title--nm">
            CONTACT US
          </span>
          <h2 className={styles.contact__title}>
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text text--nm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div className={styles.contact__form}>
          <h3 className={styles.contact__formTitle}>Get in touch.</h3>
          
          {state.succeeded ? (
            <div className={styles.contact__success}>
              <p className="text">Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <form className={styles.contact__formForm} onSubmit={handleSubmit}>
              <div className={styles.contact__group}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className={styles.contact__group}>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className={styles.contact__group}>
                <label htmlFor="mobile">Mobile Number</label>
                <input id="mobile" type="tel" name="mobile" pattern="[0-9+\-() ]{7,}" required />
                <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />
              </div>
              <button 
                type="submit" 
                className={styles.contact__submit} 
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}