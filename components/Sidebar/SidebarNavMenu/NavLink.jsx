import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.scss";

function NavLink({ children, active, route }) {
  return (
    <Link href={ route || "#"}>
      <div
        className={`${styles.linkWrapper}  ${
          active === "true" && styles.active
        }`}
      >
        <span className={styles.linkIcon}></span>
        <p className={styles.linkTitle}>{children}</p>
      </div>
    </Link>
  );
}
export default NavLink;
