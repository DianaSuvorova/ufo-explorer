import fetch from "node-fetch";
import styles from "./searchform.module.css";

const processData = (packageJson) => {
  fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: packageJson,
  });
};

export default function SearchForm() {
  return (
    <div className={styles.search}>
      <input
        type="file"
        accept=".json"
        placeholder="Coming soon: provide your package.json so we find projects you use that need your help "
        className={styles.search__input}
        onChange={(e) => {
          e.preventDefault();
          const reader = new FileReader();
          reader.onload = async (ev) => {
            processData(ev.target.result);
          };
          reader.readAsText(e.target.files[0]);
        }}
      />
    </div>
  );
}
