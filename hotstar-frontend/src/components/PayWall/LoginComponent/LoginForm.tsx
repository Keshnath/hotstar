import { useNavigate} from "react-router-dom";
import crossIcon from "../../../assets/image/ModalIcons/crossIcon.png";
import icon from "../../../assets/image/ModalIcons/cross.svg";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas";
import { SliderImages } from "../../../utils/constants/SliderImageData";
import { SliderSecondImages } from "../../../utils/constants/SliderImageData";
import { SliderThirdImages } from "../../../utils/constants/SliderImageData";
import Marquee from "react-fast-marquee";
import "./LoginForm.css";
import { AppDispatch, RootState } from "../../../Redux/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/Slices/userSlice/userLogin";
// import { useEffect } from "react";
import OpenEye from '../../../assets/image/LoginIcons/openEye.png';
import ClosedEye from '../../../assets/image/LoginIcons/closedEye.png';
import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { number } from "yup";
import 'react-phone-number-input/style.css'
const initialValues = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
    const loginMsg = useSelector((state : RootState) => state.login.userLoginMsg) 
    const login = useSelector((state : RootState) => state.login)
    const [show,setShow]=useState(false)
    const [value, setValue] = useState()
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const handleNavigate = () => {
    debugger
    console.log('-------',loginMsg , login.accessToken);
    if(login)
    navigate("/")
  }
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {  
        debugger      
        dispatch(userLogin({ apiName: "/my-space/log-in", userData: values }));
        handleNavigate()
        action.resetForm();
      },
    });
    
  const previousFunctionality = () => {
    navigate("/in/paywall");
  };
  const toggleImage=()=>{
setShow(!show)
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1] ">
      <div className=" w-[320px] bg-gray-800 h-[250px] md:w-[752px] md:h-[513px] flex flex-col items-center justify-between py-6 rounded-3xl">
        <button onClick={previousFunctionality}>
          <img src={crossIcon} className="ml-[42rem] -mt-1 filter invert" />
        </button>
        <div className="display-data">
          <div className="imageSliderGrid">
            <div className="imageCard">
              <Marquee
                speed={20}
                direction="right"
                className="marquee-container"
              >
                {SliderImages.map((item) => (
                  <img
                  key={item.id}
                    src={item.imageSrc}
                    className="marquee-item"
                    style={{
                      width: "8rem",
                      height: "9.8rem",
                      gap: "2rem",
                      borderRadius: "1rem",
                    }}
                  />
                ))}
              </Marquee>
            </div>
            <div className="imageCard2">
              <Marquee
                speed={20}
                direction="left"
                className="marquee-container"
              >
                {SliderSecondImages.map((item) => (
                  <img
                  key={item.id}
                    src={item.imageSrc}
                    className="marquee-item"
                    style={{
                      width: "8rem",
                      height: "9.8rem",
                      gap: "2rem",
                      borderRadius: "1rem",
                    }}
                  />
                ))}
              </Marquee>
            </div>
            <div className="imageCard3">
              <Marquee
                speed={20}
                direction="right"
                className="marquee-container"
              >
                {SliderThirdImages.map((item) => (
                  <img
                  key={item.id}
                    src={item.imageSrc}
                    className="marquee-item"
                    style={{
                      width: "8rem",
                      height: "9.8rem",
                      gap: "2rem",
                      borderRadius: "1rem",
                    }}
                  />
                ))}
              </Marquee>
            </div>
          </div>

          <div>
            <p className="text-white text-lg py-2 relative top-1 ml-5 ">
              Log in or sign up to continue
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid col-span-1 ">
              <div className="relative z-0 mb-6 group border border-gray-300 rounded mt-7  ml-5">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-4   h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ width: "20rem" }}
                  autoComplete="off"
                />
                <label
                  htmlFor="floating_email"
                  className="bg-gray-800 peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
                {values.email && (
                  <img
                    src={icon}
                    onClick={() => {
                      handleChange({ target: { name: "Email", value: "" } });
                    }}
                    className=" ml-[18rem] h-5 w-5 absolute filter invert top-4"
                    onChange={handleChange}
                  />
                )}
              </div>

              {errors.email && touched.email ? (
                <p className="text-red-500 mt-[-1rem] pl-5">{errors.email}</p>
              ) : null}
              <div className="  relative z-0 mb-6 group border border-gray-300 rounded ml-5 flex gap-32">
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  id="floating_password"
                  className="block py-2.5 px-4 w-40  h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
               
                <label
                  htmlFor="floating_password"
                  className="bg-gray-800  peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>

                {/* {values.password && (
                  <img
                    src={crossIcon}
                    onClick={() => {
                      handleChange({ target: { name: "Password", value: "" } });
                    }}
                    className=" ml-[18rem] h-5 w-5 filter invert absolute top-4"
                    onChange={handleChange}
                  />
                )} */}
                  <img   src={show ? ClosedEye : OpenEye}  className='w-6 filter h-10 mt-1 invert cursor-pointer' onClick={toggleImage} />
              </div>
              {errors.password && touched.password ? (
                <p className="text-red-500 mt-[-1rem]  pl-5">
                  {errors.password}
                </p>
              ) : null}

              {values.password && (
                <button
                  type="submit"
                  style={{ position: "absolute" }}
                  className="w-[21rem] h-[3rem] mt-44 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2  ml-4  dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Login
                </button>
              )}
            
</div>

            </form>

             <h4 className="text-[#fff] pt-32 ml-5 ">
              Having trouble logging in?{" "}
              <span className="text-blue-500">Get Help</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
