import styles from "./heroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Seja bem-vindo!</h1>
        <h1>Eu sou a Maria Eduarda</h1>

        <p>
          Olá! Meu nome é Maria Eduarda Reis Pereira, sou estudante da turma 2TDS2 do SENAI SESI, no curso de Desenvolvimento de Sistemas. Criei este projeto como parte dos meus estudos e para compartilhar informações sobre diferentes esportes.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/duda.png"
          alt="Foto de uma mulher sorridente"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  );
}
