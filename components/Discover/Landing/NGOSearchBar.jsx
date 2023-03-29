import React from "react";
import styles from "./NGOSearchBar.module.scss";

function NGOSearchBar() {
  return (
    <div className={styles.searchbarWrapper}>
      <input type="text" className={styles.nameInput} placeholder="Search NGO" />
      <input type="type" className={styles.categoryInput} placeholder="Any Category"/>
      <button className={styles.searchBtn}>Find Provider</button>
    </div>
  );
}
 
export default NGOSearchBar;
