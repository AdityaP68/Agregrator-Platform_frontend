import * as Yup from "yup";

const form1ValidationSchema = Yup.object({
  role: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  mobileNumber: Yup.string()
    .required("Required")
    .min(8, "Must be at least 8 digits")
    .max(10, "Must be at most 10 digits"),
  address: Yup.string().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
});

export default form1ValidationSchema;
