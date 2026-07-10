"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const imgWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imgWrapperRef,
    offset: ["start end", "end start"],
  });

  // Smooths out the raw scroll progress so motion doesn't feel stepped/jittery
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const y = useTransform(smoothProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section className={styles.about}>
      <div className={`${styles.about__container} container`}>

        <div className={styles.about__img} ref={imgWrapperRef}>
          <motion.div style={{ y }} className={styles.about__imgInner}>
            <Image
              src="/images/About-Us.webp"
              alt="About Us"
              width={500}
              height={300}
              className="image"
            />
          </motion.div>
        </div>

        <div className={styles.about__content}>
          <span className="section__title">ABOUT US</span>
          <h2 className={styles.about__title}>Lorem ipsum dolor sit amet,
            <span className="red"> Consecterur adipiscing elit, sed.</span>
          </h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.about__grid}>
            <div className={styles.about__stat}>
              <span className={styles.about__num}>100+</span>
              <p className={styles.about__info}>Lorem ipsum dolor sit amet</p>
            </div>
            <div className={styles.about__stat}>
              <span className={styles.about__num}>1000+</span>
              <p className={styles.about__info}>Lorem ipsum dolor sit amet</p>
            </div>
            <div className={styles.about__stat}>
              <span className={styles.about__num}>100%</span>
              <p className={styles.about__info}>Lorem ipsum dolor sit amet</p>
            </div>
            <div className={styles.about__stat}>
              <span className={styles.about__num}>14</span>
              <p className={styles.about__info}>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <a href="#" className={`${styles.about__btn} button button--black`}>Learn More About Us →</a>
        </div>
      </div>
    </section>
  );
}