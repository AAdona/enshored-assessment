import Image from "next/image";
import styles from "./Sales.module.css";

export default function Sales() {
  return (
    <section className={styles.sales}>
      <div className={`${styles.sales__container} container`}>
        <span className="section__title">
          SALES &nbsp; INSTALLATION
        </span>
        <div className={styles.sales__header}>
          <h2 className={styles.sales__title}>
            <span className={styles.sales__highlight}>
              Lorem ipsum dolor sit amet,
            </span>
            consectetur adipiscing elit
          </h2>
          <div className={styles.sales__info}>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className={`${styles.sales__btn} button button--black`}>
              Learn More →
            </a>
          </div>
        </div>
        <div className={styles.sales__box}>
          <div className={styles.sales__img}>
            <Image
              src="/images/sales-install.webp"
              alt="Sales"
              width={1192}
              height={296}
              className="image"
            />
          </div>
          <span className={styles.sales__boxTitle}>
            Lorem ipsum dolor sit amet
          </span>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.sales__others}>
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className={styles.sales__box}>
              <div className={styles.sales__icon}>
                <Image
                  src={`/icons/sales-icon${index + 1}.svg`}
                  alt={`Sales Icon ${index + 1}`}
                  width={40}
                  height={40}
                />
              </div>
              <p className="text text--gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
}