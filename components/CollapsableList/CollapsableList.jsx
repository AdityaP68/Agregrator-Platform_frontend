import React from "react";
import styles from "./CollapsableList.module.scss";

function CollapsableList({ title, children }) {
  return (
    <div className={styles.listContainer}>
      <h6>{title} <span className={styles.expandText}>See All</span></h6>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
}

export default CollapsableList;
