"use client";

import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img
              src="/images/logo.png"
              alt="SportHub Logo"
              className={styles.logoImage}
              onError={(e) => {
                console.log('Erro ao carregar logo:', e);
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = 'SH';
                e.target.parentElement.style.color = 'white';
                e.target.parentElement.style.fontWeight = 'bold';
              }}
            />
          </div>
          <h1 className={styles.title}>SportHub</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/sobreAPI" className={styles.navLink}>
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
      </div>
    </header>
  );
}
