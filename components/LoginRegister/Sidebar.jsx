import React from "react";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}><div className={styles.logo}></div>Aggregator</div>
      <div className={styles.sidebarText}>
        <h1>
          Start your <span>journey with us.</span>
        </h1>
        <p>
        Discover the world's best community of NGOs and contributers
        </p>
      </div>
      <div className={styles.sidebarFooter}></div>
    </div>
  );
}

export default Sidebar;
