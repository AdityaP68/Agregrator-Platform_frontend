import React from "react";
import styles from "./Button.module.scss";

function Button({ title }) {
  return (
    <div className={styles.btn}>
      <span>{title}</span>
    </div>
  );
}

export default Button;
