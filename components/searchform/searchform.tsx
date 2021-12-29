import { useState } from 'react';
import fetch from "node-fetch";
import styles from "./searchform.module.css";


export default function SearchForm() {

  const [resultList, setResultList] = useState([]);

  const processData = (packageJson) => {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: packageJson,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResultList(data);
      });
  };

  return (
    <>
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
      {resultList.map(result => (<div>{result.name}</div>))}
    </>
  );
}
