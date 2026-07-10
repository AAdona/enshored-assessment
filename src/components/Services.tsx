"use client";

import { useState, useRef } from "react";
import ServiceStep from "@/components/ServiceStep";
import styles from "./Services.module.css";

export default function Services() {
  const steps = [1, 2, 3, 4, 5];
  const [activeStep, setActiveStep] = useState(1);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className={styles.service} id="services">
      <div className={`${styles.service__container} container container--980`}>
        <div className={styles.service__header}>
          <span className="section__title section__title--sm">OUR PROCESS</span>
          <h2 className={styles.service__title}>
            As <span className="red">easy</span> as 1, 2, 3.
          </h2>
          <p className="text text--white text--nm">
            From data to implementation — every step is guided, personalised, and optimised.
          </p>
        </div>
        <div className={styles.service__content}>
          {steps.map((step, index) => (
            <ServiceStep
              key={step}
              step={step}
              isActive={activeStep === step}
              onActivate={() => setActiveStep(step)}
              registerRef={(el) => (itemRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}