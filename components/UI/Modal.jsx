import React from "react";
import styles from "./Modal.module.scss";

function Modal({ modalState }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span
            onClick={() => {
              modalState((v) => !v);
            }}
          >
            X
          </span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
