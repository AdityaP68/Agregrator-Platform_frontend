import React from "react";
import styles from "./RegisterForm.module.scss";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

function RegisterForm() {
  return (
    <form className={styles.form}>
      <Input
        label={"First Name"}
        fieldType={"text"}
        placeholder={"Enter your first name..."}
        required={"true"}
      />
      <Input
        label={"Last Name"}
        fieldType={"text"}
        placeholder={"Enter your last name..."}
        required={"true"}
      />
      <Input
        label={"Email"}
        fieldType={"email"}
        placeholder={"Enter your email..."}
        required={"true"}
      />
      <Input
        label={"Username"}
        fieldType={"text"}
        placeholder={"Pick a username..."}
        required={"true"}
      />
      <Input
        label={"Password"}
        fieldType={"password"}
        placeholder={"Enter your password..."}
        required={"true"}
      />
      <Input
        label={"Password"}
        fieldType={"password"}
        placeholder={"Enter your password..."}
        required={"true"}
      />
      <Input
        label={"Password"}
        fieldType={"password"}
        placeholder={"Enter your password..."}
        required={"true"}
      />
      <Input
        label={"Password"}
        fieldType={"password"}
        placeholder={"Enter your password..."}
        required={"true"}
      />
      <Button title={"Create Account"}/>
    </form>
  );
}

export default RegisterForm;
