import Image from "next/image";
import styles from "./main.module.css";
import SearchForm from "../searchform/searchform.tsx";

const gitAuthURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

export default function Main() {
  return (
    <div className="section">
      <main className={styles.main}>
        <div className={styles.main__content}>
          <div className={styles.main__title}>
            Friendly open source opportunities explorer
          </div>
          <SearchForm />
          <a href={gitAuthURL}>We use git auth to get the data</a>
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
    </div>
  );
}
