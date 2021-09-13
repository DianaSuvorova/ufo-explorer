import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./documentation.module.css";

// /* eslint-disable max-len */z

export default function Documentation() {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <div className={styles.about__content}>
          <p>Hi There!</p>
          <p>
            Join us! We are open source and would welcome contributions in the
            form of code, ideas, inspirations, good memes!
          </p>
          <div className={styles.about__contacts}>diana.suvorova@gmail.com</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
