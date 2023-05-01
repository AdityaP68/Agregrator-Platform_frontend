import React from "react";
import styles from "./FormStyles.module.scss";
import { Formik, Form } from "formik";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import TabBtn from "../../../UI/TabBtn";
import form1ValidationSchema from "../../../../utils/validationSchema";

function FormA() {
  const initialValues = {
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    address: "",
    dateOfBirth: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={form1ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className={styles.form}>
          {console.log(errors)}
          {/* <div className={styles.typeSelectWrapper}>
            <h4>Your Role is?</h4>
            <div className={styles.typeContainer}>
              <TabBtn title={"NGO"} />
              <TabBtn title={"User"} />
            </div>
          </div> */}
          {/* <label htmlFor="firstName">First Name</label> */}
          <Input
            labelName={"First Name"}
            type="text"
            name="firstName"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your first name..."
            required={true}
          />
          <Input
            labelName={"Last Name"}
            type="text"
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your last name..."
            required={true}
          />
          <Input
            labelName={"Email"}
            type="text"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email..."
            required={true}
          />
          <Input
            labelName={"Username"}
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your username..."
            required={true}
          />
          <Input
            labelName={"Password"}
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your password..."
            required={true}
          />
          <Input
            labelName={"Confirm Password"}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your confirm password..."
            required={true}
          />
          <Input
            labelName={"Mobile Number"}
            type="number"
            name="mobileNumber"
            id="mobileNumber"
            value={values.mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your mobile number..."
            required={true}
          />
          <Input
            labelName={"Address"}
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your address..."
            required={true}
          />
          <Input
            labelName={"Date of Birth"}
            type="Date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your DOB..."
            required={true}
          />

          <Button title={"Create Account"} type={"submit"} />
        </Form>
      )}
    </Formik>
  );
}

export default FormA;
