import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className="section">
      <footer className={styles.footer}>
        <p className={styles.footer__item}>&copy; 2021 UFO, Inc.</p>
        <ul className={styles.footer__content}>
          <li className={styles.footer__item}>
            <Link href="/">Terms</Link>
          </li>
          <li className={styles.footer__item}>
            <Link href="/">Privacy</Link>
          </li>
          <li className={styles.footer__item}>
            <Link href="/">Site Map</Link>
          </li>
          <li className={styles.footer__item}>
            <Link href="/about">What is UFO?</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
