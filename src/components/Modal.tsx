"use client";

import { ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";
import styles from "./Modal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const TRANSITION_DURATION = 300;

export default function Modal({ isOpen, onClose, children }: Props) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false); // controls the --open class specifically

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Wait a frame so the "closed" styles paint first, THEN apply "open" — this is what makes the transition actually run
      const raf = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsVisible(false);
      const timeout = setTimeout(() => setShouldRender(false), TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={clsx(styles.overlay, isVisible && styles["overlay--open"])}
      onClick={onClose}
    >
      <div
        className={clsx(styles.modal, isVisible && styles["modal--open"])}
        role="dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}