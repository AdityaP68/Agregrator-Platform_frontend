import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.scss";

function NavLink({ title }) {
  return (
    <Link href={"#"}>
      <div className={styles.linkWrapper}>
        <span className={styles.linkIcon}></span>
        <p className={styles.linkTitle}>{title}</p>
      </div>
    </Link>
  );
}
export default NavLink;
