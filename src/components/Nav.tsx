"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "Work", href: "#" },
  { label: "Services", href: "#" },
  { label: "Careers", href: "#" },
];

const SCROLL_THRESHOLD = 50; // px scrolled before header becomes "active"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll(); // check initial position (e.g. if page loads mid-scroll)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx(styles.header, isScrolled && styles["active"])}>
      <Link href="#" className={styles.header__logo}>
        <Image
          src="/images/Enshored-Logo.png"
          alt="Enshored"
          width={120}
          height={40}
          className="image"
        />
      </Link>

      <ul className={styles.header__nav}>
        {NAV_LINKS.map((link) => (
          <li key={link.label} className={styles.header__navItem}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="#" className={`${styles.header__btn} button`}>
        Get A Quote
      </Link>

      <a
        href="#"
        className={styles.header__menuToggle}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </a>

      <ul className={`${styles.header__mobileNav} ${isOpen ? styles["header__mobileNav--open"] : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
        <li className={styles.header__quote}>
          <Link href="#" className="button" onClick={() => setIsOpen(false)}>
            Get A Quote
          </Link>
        </li>
      </ul>

      <div
        className={clsx(styles.header__backdrop, isOpen && styles["header__backdrop--open"])}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}