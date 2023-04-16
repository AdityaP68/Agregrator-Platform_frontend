import React, { useState } from "react";
import { useFormik } from "formik";

function Form2({ formik }) {
  return (
    <>
      <input
        type="text"
        placeholder="address"
        onChange={formik.handleChange}
        value={formik.values.address}
        name={"address"}
      />
      <input
        type="text"
        placeholder="city"
        onChange={formik.handleChange}
        value={formik.values.city}
        name="city"
      />
    </>
  );
}

function Form() {
  const [next, setNext] = useState(false);
  const formik = useFormik({
    initialValues: next
      ? {
          username: "",
          password: "",
        }
      : { address: "", city: "" },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {!next && (
          <>
            <input
              type="text"
              placeholder="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
            />
            <input
              type="text"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
            />
          </>
        )}
        {next && <Form2 formik={formik} />}
        <button
          onClick={() => {
            setNext(true);
          }}
          type="submit"
        >
          next
        </button>
      </form>
    </>
  );
}

export default Form;
