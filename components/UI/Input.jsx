import React from "react";
import styles from "./Input.module.scss";

function Input({ label, placeholder, fieldType, required, max, min }) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input
        type={fieldType}
        name={fieldType}
        placeholder={placeholder}
        required={required}
        max={max}
        min={min}
      />
      {/* <span className={styles.errorText}>*error text</span> */}
    </div>
  );
}

export default Input;
