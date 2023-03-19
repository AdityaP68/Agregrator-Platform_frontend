import React from "react";
import styles from "./CommunityHeader.module.scss";

function CommunityHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.coverImageContainer}>
        <div className={styles.profileImageContainer}>
          <div>
          <div className={styles.profileImage}></div>
          </div>
          <span className={styles.creationDate}>Member since 12 March, 2022</span>
        </div>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.communityDetailsWrapper}>
          <h1 className={styles.communityName}>Wildlife Community</h1>
          <span className={styles.communityDetails}>Public Community * 63.5k members</span>
        </div>
      </div>
      <div className={styles.communityTabsMenu}>
        <div className={styles.menu}></div>
        <span className={styles.viewMore}></span>
      </div>
    </section>
  );
}

export default CommunityHeader;
