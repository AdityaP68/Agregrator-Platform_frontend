import React, { useState } from "react";
import Link from "next/link";
import styles from "./Register.module.scss";
import { Formik, Field, Form, FormikProps } from "formik";
import FormSidebar from "../FormSidebar";
import ProgressStepper from "../../UI/ProgressStepper";
import FormA from "./Forms/FormA";

function Register() {
  const [currentForm, setCurrentForm] = useState("A");
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <FormSidebar />
      </aside>
      <main className={styles.main}>
        <section className={styles.formWrapper}>
          <div className={styles.formTitle}>
            <h1>Sign Up</h1>
            <span>
              Have an account already?{" "}
              <Link href={"/login"}>
                <span className={styles.link}>login</span>
              </Link>
            </span>
          </div>
          <div className={styles.stepper}>
            <ProgressStepper />
          </div>
          <Formik>
            
          </Formik>
          {currentForm === "A" && <FormA next={setCurrentForm} />}
          {currentForm === "B" && <FormA next={setCurrentForm} />}
          {currentForm === "C" && <FormA next={setCurrentForm} />}
        </section>
      </main>
    </div>
  );
}

export default Register;
