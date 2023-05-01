import React from "react";
import styles from "./NGOResultCard.module.scss";

function NGOResultCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.credentialsRow}>
        <div className={styles.ngo}>
          <div className={styles.ngoIcon}></div>
          <div className={styles.ngoDetails}>
            <div className={styles.name}>
              <span>Muskaan Foundation</span>| Pune, India
            </div>
            <small>
              4.8 * <span className={styles.reviews}>68 reviews</span>
            </small>
          </div>
        </div>
        <div className={styles.keyValue}>
          <span>Credibility Rating:</span> 9/10
        </div>
        <div className={styles.keyValue}>
          <span>Activity Points</span> 24000+
        </div>
        <div className={styles.actionsContainer}>
          <div className={styles.actionsIcon}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.actionsIcon}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.actionsIcon}>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.actionsIcon}>
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionRow}>
        <div className={styles.description}>
          <small>Description</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            magnam unde quidem accusantium, nam quas voluptates esse veniam
            reiciendis debitis ipsam amet sapiente officia deserunt vel totam
            odio soluta. Molestias!
          </p>
        </div>
        <div className={styles.description}>
          <small>About</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            magnam unde quidem accusantium, nam quas voluptates esse veniam
            reiciendis debitis ipsam amet sapiente officia deserunt vel totam
            odio soluta sapiente officia des. Molestias!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NGOResultCard;
