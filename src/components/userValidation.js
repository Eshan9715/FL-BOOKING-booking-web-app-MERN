import * as yup from "yup";

 export const userSchema = yup.object().shape({
    firstName: yup.string().required('Please Enter your firstname'),
    lastName: yup.string().required('Please Enter your lastname'),
    email: yup.string().email().matches( /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Valid email is required!").required('Please Enter your email'),
    password: yup.string().min(6,'Too Short!').max(10,'Too Long!').required('Please Enter your password'),
    confirmPassword: yup.string().required("Please Re-Enter your password").oneOf([yup.ref("password"), null], "Passwords must match"),
    

 })