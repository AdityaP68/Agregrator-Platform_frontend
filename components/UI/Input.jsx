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
  placeholder,
  touched,
  error,
}) {
  return (
    <div className={`${styles.inputWrapper}`}>
      <label>{labelName}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={touched && error && { border: "2px solid #f63131" }}
      />
      {touched && error && (
        <span className={styles.errorMessageWrapper}>
          <span className={styles.errorText}>{"*" + error}</span>
        </span>
      )}
    </div>
  );
}

export default Input;
