import React, { useState } from "react";
import styles from "./FormStyles.module.scss";
import { Formik, Form } from "formik";
import axios from "axios";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import ChoiceTabBtn from "../../../UI/ChoiceTabBtn";
import form1ValidationSchema from "../../../../utils/validationSchema";
import { userRegisterPath } from "../../../../utils/endpointConfig";
import { useDispatch } from "react-redux";
import { setTokens, testAction } from "../../../../store/userSlice";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

function FormA({ setCurrStep, setCurrUserId }) {
  // const [selectedRole, setSelectedRole] = useState("");
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter();

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

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    console.log(values);
    try {
      const response = await axios.post(userRegisterPath, values);
      console.log("response", response);

      try {
        // Save the access token and refresh token to cookies
        setCookie("accessToken", response.data.accessToken, { maxAge: 86400 }); // Expires in 1 day
        setCookie("refreshToken", response.data.refreshToken, {
          maxAge: 604800,
        }); // Expires in 7 days
        setCookie("user", response.data.user, { maxAge: 604800 });

        // console.log("working?????");
        console.log("cookies", cookies.accessToken);

        //less see if it runs
        // dispatch(testAction());
        // dispatch(
        //   setTokens({
        //     accessToken: response?.data?.accessToken,
        //     refreshToken: response?.data?.refreshToken,
        //   })
        // );

        setIsSuccess(true);
        //console.log("saved user id", response?.data?.user?._id)
        const userId = String(response?.data?.user?._id);
        if (response.statusText.toLowerCase() == "ok") {
          setStatusMessage("Registration Success !!!");
          setCurrUserId(userId);
          console.log(cookies)
          setTimeout(() => {
            setCurrStep(2);
          }, 600);
        } else {
          setStatusMessage("Error creating user, check the input fields");
        }
      } catch (e) {
        console.log("the following error popped up", e);
      }

    } catch (error) {
      console.log(error.response.data);
      if (error?.response && error?.response?.status === 409) {
        setStatus({ error: "conflict" });
      } else {
        console.log("this is the error", error);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={form1ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setValues,
        status,
      }) => (
        <Form className={styles.form}>
          {isSuccess && (
            <div className={styles.successMessageDiv}>
              <small>{statusMessage}</small>
            </div>
          )}
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
