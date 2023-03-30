import React from "react";
import styles from "./ProgressStepper.module.scss";

function ProgressStepper() {
  return (
    <div className={styles.stepperWrapper}>
      <div className={`${styles.stepContainer} ${styles.active}`}>
        <div className={styles.step}>1</div>
      </div>
      <div className={styles.guidingLines}></div>
      <div className={styles.stepContainer}>2</div>
      <div className={styles.guidingLines}></div>
      <div className={styles.stepContainer}>3</div>
    </div>
  );
}

export default ProgressStepper;
