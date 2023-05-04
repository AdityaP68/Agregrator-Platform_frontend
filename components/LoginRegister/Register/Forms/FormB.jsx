import React, { useState } from "react";
import styles from "./FormStyles.module.scss";
import { Formik, Form } from "formik";
import axios from "axios";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import ChoiceTabBtn from "../../../UI/ChoiceTabBtn";
import { userDetailsUpdatePath } from "../../../../utils/endpointConfig";
import { useDispatch } from "react-redux";
import { setTokens, testAction } from "../../../../store/userSlice";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

function FormB({ currUserId }) {
  // const [selectedRole, setSelectedRole] = useState("");
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter();

  console.log("this is user id 2", currUserId);

  const initialValues = {
    ngoRegNumber: "",
    decription: "",
    about: "",
  };

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    console.log(values);
    try {
      const response = await axios.patch(
        `http://localhost:9000/users/update/${currUserId}`,
        values
      );
      console.log("response", response);
      setIsSuccess(true);
      if (response.statusText.toLowerCase() == "ok") {
        setCookie("user", response.data.user, { maxAge: 604800 });
        setStatusMessage("Successfully Updated the details !!");
        setTimeout(() => {
          router.push("/");
        }, 400);
      } else {
        setStatusMessage("Error updating the values");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      if (error?.response && error?.response?.status === 409) {
        setStatus({ error: "conflict" });
      } else {
        console.log("this is the error", error);
      }
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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

          {cookies?.user?.role === "ngo" && (
            <Input
              labelName={"NGO Registration Number"}
              type="text"
              name="ngoRegNumber"
              id="ngoRegNumber"
              value={values.ngoRegNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your NGO registration Number..."
              required={true}
              touched={touched.ngoRegNumber}
              error={errors.ngoRegNumber}
            />
          )}
          <Input
            labelName={"Description"}
            type="text"
            name="decription"
            id="decription"
            value={values.decription}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your ngo description..."
            required={true}
            touched={touched.decription}
            error={errors.decription}
          />
          <Input
            labelName={"About"}
            type="text"
            name="about"
            id="about"
            value={values.about}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter what its about..."
            required={true}
            touched={touched.about}
            error={errors.about}
          />

          <Button title={"Update Details"} type={"submit"} />
        </Form>
      )}
    </Formik>
  );
}

export default FormB;
