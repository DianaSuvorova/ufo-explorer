import Image from "next/image";
import styles from "./searchform.module.css";

export default function SearchForm() {
  return (
    <div className={styles.search}>
      <button
        type="button"
        className={`${styles.search__categories} ${styles.clickable}`}
      >
        All Categories
        <div className={styles.search__arrow}>
          <Image src="/grey-arrow.svg" width={8} height={4} />
        </div>
      </button>
      <input
        type="text"
        placeholder="Search UFO"
        className={styles.search__input}
      />
      <button
        type="submit"
        className={`${styles.search__btn} ${styles.clickable}`}
      >
        <Image src="/search-icon.svg" alt="Search" width={22} height={22} />
      </button>
    </div>
  );
}
