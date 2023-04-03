import React from "react";
import Link from "next/link";
import DashboardIcon from '@mui/icons-material/Dashboard';
import styles from "./NavLink.module.scss";

function NavLink({ children, active, route, icon }) {
  return (
    <Link href={ route || "#"}>
      <div
        className={`${styles.linkWrapper}  ${
          active === "true" && styles.active
        }`}
      >
      
        <div className={styles.linkIcon}>
          {icon}
        </div>
        <p className={styles.linkTitle}>{children}</p>
      </div>
    </Link>
  );
}
export default NavLink;
