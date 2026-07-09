"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
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
    margin: "-45% 0px -45% 0px", // narrow band near vertical center
    once: false,
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
      <div className={styles.service__step}>
        <span className={styles.service__num}>STEP {step}</span>
        <h3 className={styles.service__subtitle}>Lorem Ipsum, Lorem Ipsum</h3>
        <p className="text text--white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.service__img}>
        <Image
          src={`/images/step${step}.webp`}
          alt={`Service Step ${step}`}
          fill
          sizes="(max-width: 768px) 100vw, 46vw"
          className="image"
        />
      </div>
    </div>
  );
}