import React from "react";
import styles from './FavouriteBar.module.scss'

function FavouriteBar() {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>Favourite Users/Communities </h6>
      <div className={styles.horizontalScroll}>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
        <div className={styles.usersWrapper}>
            <div className={styles.users}></div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteBar;
