import React, {useState} from "react"
import styles from "./searchform.module.css";

export default function SearchForm() {
const [file, setFile] = useState(null)
  
function submitHandler(e){
  e.preventDefault();
  // TODO send to backend
}

  function fileHandler(e) {
    e.preventDefault();
    setFile(e.target.value)
  }


  return (
    <div className={styles.search}>
        <input
          type="file"
          accept=".json"
          placeholder="Coming soon: provide your package.json so we find projects you use that need your help "
          className={styles.search__input}
          onChange={fileHandler}
          value={file}
        />
        <button type="submit">submit</button>
    </div>
  );
}
