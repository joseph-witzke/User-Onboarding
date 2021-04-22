import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("name is required")
        .min(3, "name must be at least 3 characters"),
    email: yup
        .string()
        .email("must be a valid email")
        .required("email is required"),
    password: yup
        .string()
        .required("password is required")
        .min(6, "passwords must be at least 6 characters"),
    terms: yup
        .boolean()
        .oneOf([true],"you must check this to proceed"),
});