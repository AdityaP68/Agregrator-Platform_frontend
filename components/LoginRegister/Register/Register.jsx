import React, { useState } from "react";
import Link from "next/link";
import styles from "./Register.module.scss";
import { Formik, Field, Form, FormikProps } from "formik";
import FormSidebar from "../FormSidebar";
import ProgressStepper from "../../UI/ProgressStepper";
import FormA from "./Forms/FormA";
import validationSchema from "../../../utils/validationSchema";

const initialValues = {
  role: "",
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmedPassword: "",
  mobileNumber: "",
  address: "",
  dateOfBirth: "",
};

function Register() {
  const [currStep, setCurrStep] = useState(1);
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
            <ProgressStepper step={currStep} />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => {
              console.log(values);
            }}
          >
            {({ values, handleChange, errors, touched }) =>
              // console.log({ values, handleChange, errors, touched })
              currStep === 1 && (
                <FormA
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                  next={setCurrStep}
                  touched={touched}
                />
              )
            }
          </Formik>
        </section>
      </main>
    </div>
  );
}

export default Register;
