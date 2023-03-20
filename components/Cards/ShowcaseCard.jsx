import React from "react";
import styles from "./Showcasecard.module.scss";

function ShowcaseCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardCover}></div>
      <div className={styles.cardContent}>
        <div className={styles.textWrapper}>
          <h6>Everything you need to know about NGOs</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            perspiciatis deleniti aperiam rerum esse.
          </p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.authorDetails}>
            <div>
              <span className={styles.img}></span>
            </div>
              <p>Eren Nelson</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseCard;
