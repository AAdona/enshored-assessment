import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image Wrapper */}
      <div className={styles.hero__bgWrapper}>
        <Image
          src="/images/Hero-BG.webp"
          alt="Hero Background"
          fill
          priority
          quality={75}
          className={styles.hero__bgImage}
        />
      </div>

      {/* Content stays on top */}
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>Lorem ipsum 
        <br/>
        <span className="red">dolor sit amet</span> 
        </h1>
        
        <p className={styles.hero__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <a href="#" className={`${styles.hero__btn} button`}>
          Get A Quote
        </a>
        
        <Image
          src="/images/hero-img.png"
          alt="Enshored"
          width={293}
          height={80}
          className="hero__img image"
        />
      </div>
    </section>
  );
}