import styles from "./heroSection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>
          Seja bem-vindo ao <span className={styles.highlight}>SportHub</span>
        </h1>
        <p>
          Descubra o mundo dos esportes através da nossa plataforma completa. 
          Explore modalidades, conheça regras, equipamentos e muito mais. 
          Uma experiência única para entusiastas do esporte.
        </p>
        
        <div className={styles.ctaContainer}>
          <Link href="/esportes" className={styles.ctaPrimary}>
            Explorar Esportes
          </Link>
          <Link href="/sobreAPI" className={styles.ctaSecondary}>
            Sobre a API
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Modalidades</div>
          </div>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/duda.png"
            alt="Maria Eduarda - Desenvolvedora"
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
}
