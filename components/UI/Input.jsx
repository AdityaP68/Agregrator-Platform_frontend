import React from "react";
import styles from "./Input.module.scss";

function Input({
  labelName,
  type,
  name,
  id,
  value,
  onChange,
  onBlur,
  placeholder
}) {
  return (
    <div className={styles.inputWrapper}>
      <label>{labelName}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        // required={required}
        // max={max}
        // min={min}
      />
      {/* {error && <span className={styles.errorText}>{error}</span> } */}
    </div>
  );
}

export default Input;
