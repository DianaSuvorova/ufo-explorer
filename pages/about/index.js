import Image from "next/image";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./about.module.css";

/* eslint-disable max-len */

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <div className={styles.about__content}>
          <p>Hi There!</p>
          <p>
            We believe in the power of the community through the power of
            technology through the power of its community.{" "}
          </p>
          <p>
            Our technology of choice is Javascript. And we are all at very
            different stages of discovering it. Some of us learn it while being
            full-time Javascript engineers, others doing it full-time without
            being paid for it.
          </p>
          <p>
            We are building a product that, given the dependencies of your
            project in a form of `package.json` , returns the list of projects
            that is being used as a first-degree dependency or a dependency of a
            dependency and may use some attention from fellow engineers. Ie it
            is in active development yet falls below `developer fame` threshold.
          </p>
          <p>
            Join us! We are open source and would welcome contributions in the
            form of code, ideas, inspirations, good memes!
          </p>
        </div>
        <div className={styles.about__image}>
          <Image
            src="/ufo-team.png"
            alt="UFO Team"
            width={2778}
            height={2210}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
