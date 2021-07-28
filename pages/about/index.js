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
            We are a group of people that believe that technology and its
            community fuel the development and growth of each other.
          </p>
          <p>
            The technological community that we are a part of is JavaScript, and
            we are all at very different stages of discovering it - some of us
            are full-time JavaScript engineers, others do it full-time without
            being paid for it. We like JavaScript because it is inherently
            communal and that aligns with our beliefs - nearly every JavaScript
            tool used is open source.
          </p>
          <p>
            To empower JavaScript users to engage with their community, we are
            building a product that analyzes your project’s `package.json` file
            and returns the list of projects that are being used as a first- or
            second-degree dependency and may use some attention from fellow
            engineers (i.e. it is in active development yet falls below
            `developer fame` threshold).
          </p>
          <p>
            Join us! We are open source and would welcome contributions in the
            form of code, ideas, inspirations, good memes!
          </p>
          <div className={styles.about__contacts}>diana.suvorova@gmail.com</div>
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
