"use client";

import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Services.module.css";

type Props = {
  step: number;
  isActive: boolean;
  onActivate: () => void;
  registerRef: (el: HTMLDivElement | null) => void;
};

export default function ServiceStep({
  step,
  isActive,
  onActivate,
  registerRef,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
    once: false,
  });

  // Separate observer just for the entrance animation — triggers once, earlier than the activation band
  const animationInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    once: true,
  });

  useEffect(() => {
    registerRef(ref.current);
  }, [registerRef]);

  useEffect(() => {
    if (isInView) {
      onActivate();
    }
  }, [isInView, onActivate]);

  return (
    <div
      ref={ref}
      className={clsx(styles.service__item, isActive && styles.active)}
    >
      <motion.div
        className={styles.service__step}
        initial={{ opacity: 0, y: 40 }}
        animate={animationInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      >
        <span className={styles.service__num}>STEP {step}</span>
        <h3 className={styles.service__subtitle}>Lorem Ipsum, Lorem Ipsum</h3>
        <p className="text text--white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      <motion.div
        className={styles.service__img}
        initial={{ opacity: 0, y: 40 }}
        animate={animationInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      >
        <Image
          src={`/images/step${step}.webp`}
          alt={`Service Step ${step}`}
          fill
          sizes="(max-width: 768px) 100vw, 46vw"
          className="image"
        />
      </motion.div>
    </div>
  );
}