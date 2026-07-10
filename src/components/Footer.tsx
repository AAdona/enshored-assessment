import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__content}>
          <div className={styles.footer__info}>
            <div className={styles.footer__logo}>
              <Image
                src="/images/Enshored-Logo.png"
                alt="Enshored"
                width={216}
                height={48}
                className="image"
              />
            </div>
            <div className={styles.footer__social}>
              <a href="/" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/fb.svg"
                  alt="Facebook"
                  width={48}
                  height={48}
                  className="image"
                />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/ig.svg"
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="image"
                />
              </a>
            </div>
            <p className="text text--white text--nm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.footer__links}>
            <div className={styles.footer__row}>
              <span className={styles.footer__title}>QUICK LINKS</span>
              <a href="#">About us</a>
              <a href="#">Work</a>
              <a href="#">Career</a>
              <a href="#">Contact us</a>
            </div>
            <div className={styles.footer__row}>
              <span className={styles.footer__title}>LEGAL</span>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className={styles.footer__row}>
              <span className={styles.footer__title}>NEWSLETTER</span>
              <input type="email" placeholder="Email Address"></input>
              <a href="#" className={styles.footer__btn}>Submit</a>
            </div>
          </div>
        </div >
      </div>
    </footer>
  );
}