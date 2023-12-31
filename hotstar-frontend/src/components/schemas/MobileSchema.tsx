import * as Yup from "yup"
export const MobileSchema=Yup.object({
    phone:Yup.string().max(10).required('please enter your contact number'),
  
  
})