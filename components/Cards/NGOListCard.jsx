import React from "react";
import Link from "next/link";
import styles from "./NGOListCard.module.scss";

function NGOListCard({ username, description }) {
  return (
    <Link href={"#"}>
      <div className={styles.cardBody}>
        <div className={styles.cardDataWrapper}>
          <div className={styles.dataHeader}>
            <span className={styles.logo}></span>
            steve huntly
          </div>
          <p className={styles.data}>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className={styles.cardIconWrapper}>
          <div className={styles.cardIcon}></div>
        </div>
      </div>
    </Link>
  );
}

export default NGOListCard;
