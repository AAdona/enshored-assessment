"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Hero() {
  const { openModal } = useQuoteModal();
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
        <h1 className={styles.hero__title}>
          Lorem ipsum
          <br />
          <span className="red">dolor sit amet</span>
        </h1>

        <p className={styles.hero__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button onClick={openModal} className={`${styles.hero__btn} button`}>
          Get A Quote
        </button>
        <div className={styles.hero__img}>
          <Image
            src="/images/hero-img.png"
            alt="Enshored"
            width={293}
            height={80}
            className="image"
          />
        </div>
      </div>
    </section>
  );
}