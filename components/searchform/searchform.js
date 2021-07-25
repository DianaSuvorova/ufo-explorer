import styles from "./searchform.module.css";

export default function SearchForm() {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Coming soon: provide your package.json so we find projects you use that need your help "
        className={styles.search__input}
      />
    </div>
  );
}
