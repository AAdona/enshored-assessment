import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "Work", href: "#" },
  { label: "Services", href: "#" },
  { label: "Careers", href: "#" },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.header__logo}>
        <img src="/images/Enshored logo.png" alt="Enshored" className="image"/>
      </a>

      <ul className={styles.header__nav}>
        {NAV_LINKS.map((link) => (
          <li key={link.label} className={styles.header__navItem}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#" className={`${styles.header__btn} button`}>
        Get A Quote
      </a>
    </header>
  );
}