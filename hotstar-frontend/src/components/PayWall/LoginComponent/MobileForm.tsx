import React, { useState } from "react";
import crossIcon from "../../../assets/image/ModalIcons/crossIcon.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { MobileSchema } from "../../schemas/MobileSchema";
import icon from "../../../assets/image/ModalIcons/cross.svg";
import Marquee from "react-fast-marquee";
import {
  SliderImages,
  SliderSecondImages,
  SliderThirdImages,
} from "../../../utils/constants/SliderImageData";
import "../LoginComponent/LoginForm.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const MobileForm = () => {

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const [result,setResult]=useState<any>('')
  const [show,setShow]=useState(true)
  const previousFunctionality = () => {
    navigate("/in/paywall");
  };

  const setUpRecaptcha = async (phone: string) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );
    recaptchaVerifier.render();
    return await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
  };

  const getOtp = async (phone: string) => {
    const response = await setUpRecaptcha("+91" + phone);
    console.log(response);
    setResult(response)
    setShow(false)
    // const otp = window.prompt();
    // const data: any = await response.confirm(otp as any);
    // localStorage.setItem("accessToken", data._tokenResponse.idToken);
    // navigate("/");
  };
  const verifyOtp = async (e:any) => {
    // debugger
    e.preventDefault();
    setError('');

    if (!otp ) return;
    
    try {
      // await result.confirm(otp );
       const data: any = await result.confirm(otp );
      console.log('otp',otp)
    
   localStorage.setItem("accessToken", data._tokenResponse.idToken);
      navigate('/');
    } catch (err:any) {
      setError(err.message);
      console.log(err.message)
      alert('enter valid otp')
    }
  };
  const initialValues = {
    phone: "",
 
   
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: MobileSchema,
      onSubmit: async (values, action) => {
        await getOtp(values.phone);
        console.log(values)
      },
    });
    
  const isPhoneValid = values.phone.length === 10;

  
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
          <div className="grid col-span-1">
          {show &&<form onSubmit={handleSubmit}>
            <div className="grid col-span-1 ">
              <div className="flex gap-6">
                <div className="mt-7 ml-7">
                  <input
                    type="text"
                    value="+91"
                    className="block py-2.5 px-4 h-12 text-sm  border-fixed text-transparent  text-white border-white bg-transparent  border-5 focus:border-transparent   "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: "4rem" }}
                    autoComplete="off"
                  />
                </div>

                <div className="relative z-0 mt-7     group border border-gray-300 rounded  ">
                  <input
                    type="text"
                    name="phone"
                    id="floating_phone"
                    className="block py-2.5 px-4   h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    autoComplete="off"
                  />
                  <label
                    htmlFor="floating_phone"
                    className="bg-gray-800 peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                  >
                    Enter Mobile Number
                  </label>
                  {values.phone && (
                    <img
                      src={icon}
                      onClick={() => {
                        handleChange({ target: { name: "Email", value: "" } });
                      }}
                      className=" ml-[11rem] h-5 w-5 absolute filter invert top-4 "
                      onChange={handleChange}
                    />
                  )}
                </div>
              </div>
              <div id="recaptcha-container" className="mt-8 ml-7"></div>
              {errors.phone && touched.phone ? (
                <p className="text-red-500 text-sm  pl-28 pt-0">
                  {errors.phone}
                </p>
              ) : null}
              {isPhoneValid && (
                <button
                  type="submit"
                  style={{ position: "absolute" }}
                  className="w-[21rem] h-[3rem] mt-52 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2  ml-4  dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  GET OTP
                </button>
              )}
            </div>
          </form>}
         { !show &&<form onSubmit={verifyOtp}>
            <div className="grid col-span-1 ">
              <div className="flex gap-6">
                

                <div className="relative z-0 mt-7 ml-16   group border border-gray-300 rounded  ">
                  <input
                    type="text"
                    name="otp"
                    id="floating_phone"
                    className="block py-2.5 px-4  h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                
                    onChange={(e) => setOtp(e.target.value)}
               
                    autoComplete="off"
                  />
                 
                  <label
                    htmlFor="floating_phone"
                    className="bg-gray-800 peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                  >
                    Enter Otp
                  </label>
                  
                </div>
              </div>
              <div id="recaptcha-container" className="mt-8 ml-7"></div>
            
               
                <button
                  type="submit"
                  style={{ position: "absolute" }}
                  className="w-[21rem] h-[3rem] mt-52 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2  ml-4  dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  verify otp
                </button>
            
            </div>
          </form>}
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default MobileForm;