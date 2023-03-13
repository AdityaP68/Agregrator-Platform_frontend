import React from "react";
import styles from "./Input.module.scss";

function Input({ label, placeholder, fieldType, required }) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input type={fieldType} placeholder={placeholder} required={required} />
      <span className={styles.errorText}>*error text</span>
    </div>
  );
}

export default Input;
