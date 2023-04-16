import React from "react";
import styles from "./FormStyles.module.scss";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import TabBtn from "../../../UI/TabBtn";

function FormA({ next, values, handleChange, touched }) {
  return (
    <form className={styles.form}>
      <div className={styles.typeSelectWrapper}>
        <h4>Your Role is?</h4>
        <div className={styles.typeContainer}>
          <TabBtn title={"NGO"} />
          <TabBtn title={"User"} />
        </div>
      </div>
      <Input
        label={"First Name"}
        fieldType={"text"}
        placeholder={"Enter your first name..."}
        value={values.firstName}
        onChange={handleChange}
        error={touched.firstName && errors.firstName}
        required={true}

      />
      <Input
        label={"Last Name"}
        fieldType={"text"}
        placeholder={"Enter your last name..."}
        required={true}
      />
      <Input
        label={"Email"}
        fieldType={"email"}
        placeholder={"Enter your email..."}
        required={true}
      />
      <Input
        label={"Username"}
        fieldType={"text"}
        placeholder={"Pick a username..."}
        required={true}
      />
      <Input
        label={"Password"}
        fieldType={"password"}
        placeholder={"Enter your password..."}
        required={true}
      />
      <Input
        label={"Confirmed Password"}
        fieldType={"password"}
        placeholder={"Enter your confirmed password..."}
        required={true}
      />
      <Input
        label={"Mobile Number"}
        fieldType={"number"}
        placeholder={"Enter your mobile number..."}
        // min={8}
        // max={10}
        required={true}
      />
      <Input
        label={"Address"}
        fieldType={"password"}
        placeholder={"Enter your residential address..."}
        required={true}
      />
      <Input label={"Date of Birth"} fieldType={"date"} required={true} />
      <Button title={"Create Account"} type={'submit'}/>
    </form>
  );
}

export default FormA;
