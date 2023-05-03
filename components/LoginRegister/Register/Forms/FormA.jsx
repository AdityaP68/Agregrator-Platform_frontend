import React, { useState } from "react";
import styles from "./FormStyles.module.scss";
import { Formik, Form} from "formik";
import axios from 'axios';
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import ChoiceTabBtn from "../../../UI/ChoiceTabBtn";
import form1ValidationSchema from "../../../../utils/validationSchema";
import { userRegisterPath } from "../../../../utils/endpointConfig";

function FormA() {
  // const [selectedRole, setSelectedRole] = useState("");
  const initialValues = {
    role:"",
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

  // const handleRoleSelect = (role) => {
  //   setSelectedRole(role);
  // };

  const handleSubmit = async (values, { setSubmitting, setStatus, setFieldError }) => {
    console.log(values);
    try{
      const response = await axios.post(userRegisterPath, values)
      console.log("response", response);
      
      //setSubmitting(false);
    }catch(error){
      console.log(error.response.data)
      if(error?.response && error?.response?.status === 409){
        setStatus({error: "conflict"})
        //setFieldError(conflictField, `This ${conflictField} is already registered`)
        //console.log("conflict firld ",conflictField)
      }else{
        console.log("this is the error", error)
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={form1ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, setValues, status }) => (
        <Form className={styles.form}>
          {console.log(errors)}
          <div className={styles.typeSelectWrapper}>
            <h4>Your Role is?</h4>
            <div className={styles.typeContainer}>
              <ChoiceTabBtn
                label={"NGO"}
                selected={values.role === "ngo"}
                onClick={() => setValues({ ...values, role: "ngo" })}
              />

              <ChoiceTabBtn
                label={"User"}
                selected={values.role === "user"}
                onClick={() => setValues({ ...values, role: "user" })}
              />
            </div>
          </div>

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
            touched={touched.firstName}
            error={errors.firstName}
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
            touched={touched.lastName}
            error={errors.lastName}
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
            touched={touched.email}
            error={errors.email}
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
            touched={touched.username}
            error={errors.username}
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
            touched={touched.password}
            error={errors.password}
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
            touched={touched.confirmPassword}
            error={errors.confirmPassword}
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
            touched={touched.mobileNumber}
            error={errors.mobileNumber}
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
            touched={touched.address}
            error={errors.address}
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
            touched={touched.dateOfBirth}
            error={errors.dateOfBirth}
          />

          <Button title={"Create Account"} type={"submit"} />
        </Form>
      )}
    </Formik>
  );
}

export default FormA;
