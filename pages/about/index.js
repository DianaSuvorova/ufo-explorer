import Image from 'next/image';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from './about.module.css';

/* eslint-disable max-len */

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <div className={styles.about__content}>
          <p>Hi There!</p>
          <p>
            We are a group of people who believe that technology and its
            community fuel the development and growth of each other.
          </p>
          <p>
            The community that we are part of is JavaScript, and we are all at
            very different stages of discovering it. Some of us are full-time
            JavaScript engineers, others are exploring it in their free time. We love JavaScript because it is inherently communal, and that aligns with our beliefs - nearly every JavaScript tool used is open source.
          </p>
          <p>
            We want to empower JavaScript users to engage with their community,
            so we are building a product to do just that! Our open source
            explorer analyzes your projects `package.json` file, and returns a
            list of projects that are being used as a first or second-degree
            dependency that may need some attention from fellow engineers (you!). In other words, projects that are in active development yet fall below the `developer fame` threshold.
          </p>
          <p>
            Join us! We are open source and welcome contributions in the
            form of code, ideas, inspirations, good memes!

          </p>
          <div className={styles.about__contacts}>diana.suvorova@gmail.com</div>
        </div>
        <div className={styles.about__image}>
          <Image src="/ufo-team.png" alt="UFO Team" width={2778} height={2210} />
        </div>
      </div>
      <Footer />
    </>
  );
}
