import * as Yup from "yup"
export const SignupSchema=Yup.object({
    fullName:Yup.string().min(2).max(45).required('please enter your full name'),
    contact:Yup.string().max(10).required('please enter your contact number'),
    email:Yup.string().email().required('please enter your email'),
    password:Yup.string().min(10).required('please enter your password'),
    confirmPassword:Yup.string().required().oneOf([Yup.ref('password')],'Password must match'),
    gender:Yup.string().required('please enter Gender'),
    dob:Yup.string().required('please enter DOB'),
  
})