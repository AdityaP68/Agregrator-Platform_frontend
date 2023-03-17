import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import logoImg from "../../public/images/logo3.png";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContentWrapper}>
        <div className={styles.logo}>
          <Image src={logoImg} height={40} />
          <span>Aggregator</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
