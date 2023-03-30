import React from "react";
import styles from "./TabBtn.module.scss";

function TabBtn({ title }) {
  return (
    <div className={styles.tabBtnContainer} tabIndex={1}>
      <input type="radio" />
      <span>{title}</span>
    </div>
  );
}

export default TabBtn;
