import styles from "./banner.module.css";
import { ChevronRight } from "lucide-react";

const MainCardSection = ({
  mainCardTitle,
  mainCardDescription,
  mainCardButton,
  mainCardImage,
  mainCardImageAlt,
}) => {
  return (
    <div className={styles.mainCardSection}>
      <div className={styles.mainCardContent}>
        <h2 className={styles.mainCardTitle}>{mainCardTitle}</h2>
        <p className={styles.mainCardDescription}>{mainCardDescription}</p>
        <div className={styles.buttonContainer}>
            <button className={styles.mainCardButton}>{mainCardButton} <ChevronRight size={13} color="#3574bb" strokeWidth={3} /></button>
        </div> 
      </div>
      <div className={styles.mainCardImageContainer}>
        <img
          src={mainCardImage}
          alt={mainCardImageAlt}
          className={styles.mainCardImage}
        />
      </div>
    </div>
  );
};

export default MainCardSection;