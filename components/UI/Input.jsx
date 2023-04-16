import React from "react";
import styles from "./Input.module.scss";

function Input({
  label,
  placeholder,
  fieldType,
  required,
  max,
  min,
  error,
  handleChange,
  value,
}) {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input
        type={fieldType}
        name={fieldType}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        required={required}
        max={max}
        min={min}
      />
      {error && <span className={styles.errorText}>{error}</span> }
    </div>
  );
}

export default Input;
