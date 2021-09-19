import Image from "next/image";
import styles from "./main.module.css";
import SearchForm from "../searchform/searchform";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.main__title}>
          Friendly open source opportunities explorer
        </div>
        <SearchForm />
        <div className={styles.main__description}>
          Feel the power of the community by giving back.
        </div>
      </div>
      <div className={styles.main__image}>
        <Image
          src="/planet-illustration.jpg"
          alt="Planet Illustration"
          width={336}
          height={237}
        />
      </div>
    </main>
  );
}
