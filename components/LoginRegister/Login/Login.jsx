import React from "react";
import Sidebar from "../Sidebar";
import styles from './Login.module.scss'

function Login() {
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
        <form>

        </form>
      </main>
    </div>
  );
}

export default Login;
