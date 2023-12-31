import * as Yup from "yup"
export const LoginSchema=Yup.object({
    email:Yup.string().email().required('please enter your email'),
    password:Yup.string().min(10).required('please enter password'),
    phone:Yup.number().min(10).required('please enter phone')
    
})