import React from "react";
import Link from "next/link";
import styles from './Login.module.scss'
import FormSidebar from "../FormSidebar";
import LoginForm from "./LoginForm";


function Login() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <FormSidebar />
      </aside>
      <main className={styles.main}>
        <div className={styles.mainFormWrapper}>
          <div className={styles.formHeading}>
            <h1>Sign In</h1>
            <span>
              New to this space? Create your account{" "}
              <Link href={"/register"}>
                <span className={styles.link}>here</span>
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
          <LoginForm/>
        </div>
      </main>
    </div>
  );
}

export default Login;
