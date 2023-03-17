import React from "react";
import Link from "next/link";
import styles from "./Register.module.scss";
import FormSidebar from "../FormSidebar";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <FormSidebar />
      </aside>
      <main className={styles.main}>
        <div className={styles.mainFormWrapper}>
          <div className={styles.formHeading}>
            <h1>Sign Up</h1>
            <span>
              Have an account already?{" "}
              <Link href={"/login"}>
                <span className={styles.link}>login</span>
              </Link>
            </span>
          </div>
          <div className={styles.typeSelectWrapper}>
            <h4>Your Role is?</h4>
            <div className={styles.typeContainer}>
              <div className={styles.type} tabIndex={1}>
                <input type="radio" />
                <span>NGO</span>
              </div>
              <div className={styles.type} tabIndex={1}>
                <input type="radio" />
                <span>User</span>
              </div>
            </div>
          </div>
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}

export default Register;
