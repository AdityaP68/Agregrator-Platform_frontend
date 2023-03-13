import React from "react";
import styles from "./LoginForm.module.scss";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

function LoginForm() {
  return (
    <form className={styles.form}>
      <Input
        label={"Username"}
        fieldType={"text"}
        placeholder={"Enter your username..."}
        required={"true"}
      />

      <Input
        label={"Password"}
        fieldType={"password"}
        placeholder={"Enter your password..."}
        required={"true"}
      />

      <Button title={"Sign in"} />
    </form>
  );
}

export default LoginForm;
