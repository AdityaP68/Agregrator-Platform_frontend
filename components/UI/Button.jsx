import React from "react";
import styles from "./Button.module.scss";

function Button({ title, type }) {
  return (
    <button className={styles.btn} type={type}>
      <span>{title}</span>
    </button>
  );
}

export default Button;
