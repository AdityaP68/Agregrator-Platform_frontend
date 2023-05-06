import React from "react";
import styles from "./NGOResultCard.module.scss";
import { useRouter } from "next/router";

function NGOResultCard({ ngo }) {
  const router = useRouter();
  //onsole.log(ngo);
  return (
    <div
      className={styles.cardWrapper}
      onClick={() => {
        router.push(`/discover/ngo/${ngo?._id}`);
      }}
    >
      <div className={styles.credentialsRow}>
        <div className={styles.ngo}>
          <div className={styles.ngoIcon}>N</div>
          <div className={styles.ngoDetails}>
            <div className={styles.name}>
              <span>{`${ngo?.firstName} ${ngo?.lastName}`}</span>| Pune, India
            </div>
            <small>
              4.8 * <span className={styles.reviews}>68 reviews</span>
            </small>
          </div>
        </div>
        <div className={styles.keyValue}>
          <span>Credibility Rating:</span> 7/10
        </div>
        <div className={styles.keyValue}>
          <span>Activity Points</span> 100
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
          <p>{ngo?.decription || "NA"}</p>
        </div>
        <div className={styles.description}>
          <small>About</small>
          <p>{ngo?.about || "NA"}</p>
        </div>
      </div>
    </div>
  );
}

export default NGOResultCard;
