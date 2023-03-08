import React from "react";
import styles from "./Register.module.scss";
import Sidebar from "../Sidebar";

function Register() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <div className={styles.formHeading}>
          <h1>Sign Up</h1>
          <span>Have an account already? login</span>
        </div>
        <div className={styles.typeSelectWrapper}>
          <h4>Your Role is?</h4>
          <div className={styles.typeContainer}>
            <div className={styles.type} tabIndex={1}>
                <input type="radio"/>
                <span>NGO</span>
            </div>
            <div className={styles.type} tabIndex={1}>
                <input type="radio"/>
                <span>User</span>
            </div>
          </div>
        </div>
        <form></form>
      </main>
    </div>
  );
}

export default Register;
