import React from "react";
import styles from "./CommunityHeader.module.scss";

function CommunityHeader({ user, setListState }) {
  console.log(user);
  return (
    <section className={styles.headerSection}>
      <div className={styles.coverImageContainer}>
        <div className={styles.profileImageContainer}>
          <div>
            <div className={styles.profileImage}>
              N
            </div>
          </div>
          <span className={styles.creationDate}>Member since 5 May, 2023</span>
        </div>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.communityDetailsWrapper}>
          <h1
            className={styles.communityName}
          >{`${user?.firstName} ${user?.lastName}`}</h1>
          <span className={styles.communityDetails}>
            NGO Community * 100 members
          </span>
        </div>
      </div>
      <div className={styles.communityTabsMenu}>
        <div className={styles.menu}>
          <span
            className={styles.menuItem}
            onClick={() => {
              setListState("posts");
            }}
          >
            Posts
          </span>
          <span className={styles.menuBorder}></span>
          <span
            className={styles.menuItem}
            onClick={() => {
              setListState("transactions");
            }}
          >
            Transactions
          </span>
        </div>
        <span className={styles.viewMore}></span>
      </div>
    </section>
  );
}

export default CommunityHeader;
