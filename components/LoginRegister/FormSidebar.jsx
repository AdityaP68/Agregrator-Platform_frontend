import React from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import logo2 from "../../public/images/logo2.png";

function FormSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <Image src={logo2} height={35} alt={"aggregator"}/>
        </div>
        Aggregator
      </div>
      <div className={styles.sidebarText}>
        <h1>
          Start your <span>journey with us.</span>
        </h1>
        <p>Discover the world's best community of NGOs and contributers</p>
      </div>
      <div className={styles.sidebarFooter}>
        <p>
          Simply unbelievable! I am really satisfied with this platform and it's concept. This is
          absolutely wonderful!
        </p>
        <div className={styles.authorDetailsWrapper}>
          <div className={styles.authorImg}>
            A
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSidebar;
