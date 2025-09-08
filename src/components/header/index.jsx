import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>SportHub</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={`${styles.navLink} ${styles.active}`}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/sobre" className={styles.navLink}>
              Sobre a API
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/esportes" className={styles.navLink}>
              Esportes
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contato" className={styles.navLink}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
