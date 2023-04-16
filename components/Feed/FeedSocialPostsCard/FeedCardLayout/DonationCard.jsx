import React from "react";
import styles from "./DonationCard.module.scss";

function DonationCard({ heading, progress, style }) {
  return (
    <div className={styles.cardWrapper} style={style}>
      <div className={styles.refHeading}>
        <h4>{"Financial help for a surgery"}</h4>
        <span>click for more details</span>
      </div>
      <p className={styles.shortDescription}>
        Patient in critical condition...
      </p>
      <div className={styles.statusDetails}>
        <div className={styles.statusParam}>goal: 40,000</div>
        <div className={styles.statusParam}>recieved: 40,000</div>
        <div className={styles.statusParam}>
          status: {progress === 100 ? "completed" : "ongoing"}
        </div>
      </div>
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
      {progress !== 100 && (
        <div className={styles.donate}>
          <input
            type="number"
            placeholder="Enter the amount you want to contribute"
          />
          <button className={styles.donationBtn}>donate</button>
        </div>
      )}
    </div>
  );
}

export default DonationCard;
