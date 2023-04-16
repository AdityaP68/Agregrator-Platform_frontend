import React from "react";
import Link from "next/link";
import styles from "./NGOListCard.module.scss";
import Image from "next/image";

function NGOListCard({ username, description, imgsrc}) {
  return (
    <Link href={"#"}>
      <div className={styles.cardBody}>
        <div className={styles.cardDataWrapper}>
          <div className={styles.dataHeader}>
            <span className={styles.logo}></span>
            {username}
          </div>
          <p className={styles.data}>
          {description}
          </p>
        </div>
        <div className={styles.cardIconWrapper}>
          <div className={styles.cardIcon}>
            <Image src={imgsrc} height={40} width={50} alt={'ok'}/>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NGOListCard;
