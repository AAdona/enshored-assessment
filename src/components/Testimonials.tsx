"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import clsx from "clsx";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    name: "Sarah Leeman",
    location: "Portland, OR",
    avatar: "/images/testimonial1.webp",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Smith",
    location: "Portland, OR",
    avatar: "/images/testimonial2.webp",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Sadie Berlin",
    location: "Portland, OR",
    avatar: "/images/testimonial3.webp",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Norma Leeman",
    location: "Portland, OR",
    avatar: "/images/testimonial1.webp",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Josh Smith",
    location: "Portland, OR",
    avatar: "/images/testimonial2.webp",
    rating: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const LOOPED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];
const SCROLL_SPEED = 1; // px per frame

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const singleSetWidthRef = useRef(0);
  
  // Track the floating-point scroll position explicitly
  const scrollPosRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [sidePadding, setSidePadding] = useState(0);

  // Measure container's left gutter for initial alignment
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updatePadding = () => {
      const rect = container.getBoundingClientRect();
      setSidePadding(rect.left);
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // Measure exact width of one full set of testimonials
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const firstItem = track.children[0] as HTMLElement;
      const firstDuplicate = track.children[TESTIMONIALS.length] as HTMLElement;
      if (firstItem && firstDuplicate) {
        singleSetWidthRef.current = firstDuplicate.offsetLeft - firstItem.offsetLeft;
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [sidePadding]);

  // The continuous scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (!isPausedRef.current && singleSetWidthRef.current > 0) {
        // Update mutable ref tracker to prevent subpixel loss
        scrollPosRef.current += SCROLL_SPEED;

        if (scrollPosRef.current >= singleSetWidthRef.current) {
          scrollPosRef.current -= singleSetWidthRef.current;
        }

        track.scrollLeft = scrollPosRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Sync internal scroll tracking ref if user manually scrolls or touches track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      // Only sync if the marquee loop is paused (like during manual intervention)
      if (isPausedRef.current) {
        scrollPosRef.current = track.scrollLeft;
      }

      const cards = Array.from(track.children) as HTMLElement[];
      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex % TESTIMONIALS.length);
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  // Manual nudge for arrow clicks
  const nudge = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    isPausedRef.current = true;

    const firstCard = track.children[0] as HTMLElement;
    const cardStep = firstCard.offsetWidth + 24; // 24 = gap

    track.scrollBy({ left: cardStep * direction, behavior: "smooth" });

    window.setTimeout(() => {
      // Update our internal pointer to match where the smooth scroll landed
      scrollPosRef.current = track.scrollLeft;
      isPausedRef.current = false;
    }, 1000);
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className="container container--testimonials" ref={containerRef}>
        <div className={styles.testimonials__header}>
          <div>
            <span className="section__title section__title--nm">TESTIMONIALS</span>
            <h2 className={styles.testimonials__title}>
              What they&apos;re <span className="red">saying</span>
            </h2>
          </div>

          <div className={styles.testimonials__arrows}>
            <button onClick={() => nudge(-1)} aria-label="Previous testimonial" className={styles.arrowButton}>
              <ChevronLeft size={18} color="white" />
            </button>
            <button onClick={() => nudge(1)} aria-label="Next testimonial" className={styles.arrowButton}>
              <ChevronRight size={18} color="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Handlers moved here 👇 */}
      <div
        className={styles.testimonials__track}
        ref={trackRef}
        style={{ paddingLeft: sidePadding, paddingRight: sidePadding }}
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        {LOOPED_TESTIMONIALS.map((t, i) => (
          <div key={`${t.name}-${i}`} className={styles.testimonials__card}>
            <div className={styles.testimonials__stars}>
              {Array.from({ length: t.rating }).map((_, starIndex) => (
                <Star key={starIndex} size={16} fill="currentColor" />
              ))}
            </div>
            <p className={styles.testimonials__quote}>{t.quote}</p>
            <div className={styles.testimonials__author}>
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                draggable={false}
                className={styles.testimonials__avatar}
              />
              <div>
                <p className={styles.testimonials__name}>{t.name}</p>
                <p className={styles.testimonials__location}>{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.testimonials__dots}>
        {TESTIMONIALS.map((_, index) => (
          <div
            key={index}
            aria-hidden="true"
            className={clsx(styles.dot, activeIndex === index && styles.dotActive)}
          />
        ))}
      </div>
    </section>
  );
}