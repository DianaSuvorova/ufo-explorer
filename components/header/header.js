import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a href="replace">
          <Image
            className={styles.header__image}
            src="/logo_dark.svg"
            alt="UFO Logo"
            width={50}
            height={25}
          />
        </a>
      </Link>
      <ul className={styles.header__links}>
        <li className={styles.header__link}>
          <Link href="/">Main</Link>
        </li>
        <li className={styles.header__link}>
          <Link href="/documentation">Documentation</Link>
        </li>
        <li className={styles.header__link}>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </header>
  );
}
