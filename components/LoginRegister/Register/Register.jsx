import React, { useState } from "react";
import Link from "next/link";
import styles from "./Register.module.scss";
import { Formik, Field, Form, FormikProps } from "formik";
import FormSidebar from "../FormSidebar";
import ProgressStepper from "../../UI/ProgressStepper";
import FormA from "./Forms/FormA";
import FormB from "./Forms/FormB";
import validationSchema from "../../../utils/validationSchema";

function Register() {
  const [currStep, setCurrStep] = useState(1);
  const [currUserId, setCurrUserId] = useState('')

  console.log("this is user id", currUserId)
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <FormSidebar />
      </aside>
      <main className={styles.main}>
        <section className={styles.formWrapper}>
          <div className={styles.formTitle}>
            {currStep === 1 && (
              <>
                <h1>Sign Up</h1>
                <span>
                  Have an account already?{" "}
                  <Link href={"/login"}>
                    <span className={styles.link}>login</span>
                  </Link>
                </span>
              </>
            )}
            {currStep === 2 && (
              <>
                <h1>Update your Information</h1>
                {/* <span>
              Have an account already?{" "}
              <Link href={"/login"}>
                <span className={styles.link}>login</span>
              </Link>
            </span> */}
              </>
            )}
          </div>
          <div className={styles.stepper}>
            {/* <ProgressStepper step={currStep} /> */}
          </div>
          {currStep === 1 && <FormA setCurrStep={setCurrStep} setCurrUserId={setCurrUserId}/>}
          {currStep === 2 && <FormB setCurrStep={setCurrStep} currUserId={currUserId}/>}
        </section>
      </main>
    </div>
  );
}

export default Register;
