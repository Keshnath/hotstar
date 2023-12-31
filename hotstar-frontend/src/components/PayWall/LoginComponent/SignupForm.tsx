import { useNavigate } from "react-router-dom";
import crossIcon from "../../../assets/image/ModalIcons/crossIcon.png";
import { useFormik } from "formik";
import { SignupSchema } from "../../schemas/SignUpIndex";
import { SliderImages } from "../../../utils/constants/SliderImageData";
import { SliderSecondImages } from "../../../utils/constants/SliderImageData";
import { SliderThirdImages } from "../../../utils/constants/SliderImageData";
import Marquee from "react-fast-marquee";
import "./SignupForm.css";
import icon from "../../../assets/image/ModalIcons/cross.svg";
import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../Redux/Slices/userSlice/userRegister";
import { AppDispatch } from "../../../Redux/store/Store";
import React from "react";
const initialValues = {
  fullName: "",
  contact: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  dob: "",
  profilePicture: null,
};
const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  // const [profile, setProfile] = useState<File | null>();
  const handleNavigate = () => {
    navigate("/in/paywall/log-in")
  }

  const [isOpen, setIsOpen] = useState(false);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values, action) => {
      console.log("value is", values);
      dispatch(
        registerUser({ apiName: "/my-space/register", userData: values })
      );
      action.resetForm();
      handleNavigate()
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  const previousFunctionality = () => {
    setIsOpen(false);
    navigate("/in/paywall");
  };
const login=()=>{
    navigate('/in/paywall/log-in')
}
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Use optional chaining
    if (selectedFile) {
      setFieldValue("profilePicture", selectedFile);
      // File is not null or undefined
      // You can now work with the selected file
      //   setProfile(selectedFile);
    }
  };


  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1] signup-form ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="bg-gray-800  w-[320px] h-[250px] md:w-[1050px] md:h-[610px] flex flex-col items-center justify-between py-6 rounded-3xl ">
        <button onClick={previousFunctionality}>
          <img src={crossIcon} className="ml-[58rem] -mt-1 filter invert-[.60]" />
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
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="border  h-[100px] w-[100px]  ml-52 rounded-full bg-upload-image bg-no-repeat bg-cover bg-[#F8F8F8] flex flex-col items-center justify-center">
                <input
                  type="file"
                  className="h-full w-full border rounded-full opacity-0 "
                  name="profilePicture"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mt-2 pl-56 ">
                <span className="text-white text-center ">Add Photo</span>
              </div>
              <div className="form-control">
                <div className="ml-5 mb-3">
                <div className="relative z-0 mb-1 group border border-gray-300 rounded  mt-4">
                  <input
                    type="text"
                    name="fullName"
                    className="block py-2.5 px-4  w-52 h-12 text-sm text-white bg-transparent border-0  appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <label
                    htmlFor="floating_email"
                    className="bg-gray-800 peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name
                  </label>
                  {values.fullName && (
                    <img
                      src={icon}
                      onClick={() => {
                        handleChange({
                          target: { name: "fullName", value: "" },
                        });
                      }}
                      className=" ml-[11rem] h-5 w-5 absolute filter invert top-4"
                      onChange={handleChange}
                    />
                  )}
                 
                </div>
                {errors.fullName && touched.fullName ? (
                    <p className="text-red-500 text-xs pl-0">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>
                <div className="ml-5 mb-3">
                <div className="relative z-0 mb-1 group border border-gray-300 rounded mt-4">
                  <input
                    type="text"
                    name="contact"
                    className="block py-2.5 px-4  w-52 h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <label
                    htmlFor="floating_email"
                    className="bg-gray-800 peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contact
                  </label>
                  {values.contact && (
                    <img
                      src={icon}
                      onClick={() => {
                        handleChange({
                          target: { name: "fullName", value: "" },
                        });
                      }}
                      className=" ml-[11rem] h-5 w-5 absolute filter invert top-4"
                      onChange={handleChange}
                    />
                  )}
                  </div>
                  {errors.contact && touched.contact ? (
                    <p className="text-red-500 text-xs pl-0">
                      {errors.contact}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="mt-2 mb-3">
              <div
                className="relative z-0 mb-1 group border border-gray-300 rounded ml-5"
                style={{ width: "28.5rem" }}
              >
                <input
                  type="email"
                  name="email"
                  className="block py-2.5 px-4    h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                      handleChange({ target: { name: "email", value: "" } });
                    }}
                    className=" ml-[26rem] h-5 w-5 absolute filter invert top-4"
                    onChange={handleChange}
                  />
                )}
                </div>
                {errors.email && touched.email ? (
                  <p className="text-red-500 text-xs pl-5">{errors.email}</p>
                ) : null}
              </div>
              <div className="form-control">
              <div className="mt-2 mb-3">
                <div className="  relative z-0 mb-1 group border border-gray-300 rounded ml-5">
                  <input
                    type="password"
                    name="password"
                    className="block py-2.5 px-4  w-52  h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <label
                    htmlFor="floating_email"
                    className="bg-gray-800  peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                  {values.password && (
                    <img
                      src={crossIcon}
                      onClick={() => {
                        handleChange({
                          target: { name: "password", value: "" },
                        });
                      }}
                      className=" ml-[11rem] h-5 w-5 filter invert absolute top-4"
                      onChange={handleChange}
                    />
                  )}
                  </div>
                  {errors.password && touched.password ? (
                    <p className="text-red-500 text-xs pl-5">
                      {errors.password}
                    </p>
                  ) : null}
                </div>
                <div className="mt-2 mb-3">
                <div className="  relative z-0 mb-1  group border border-gray-300 rounded ml-5">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="floating_email"
                    className="block py-2.5 px-4 w-52  h-12 text-sm text-white bg-transparent border-0 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                  />
                  <label
                    htmlFor="floating_email"
                    className="bg-gray-800  peer-focus:font-medium absolute px-3 text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm Password
                  </label>
                  {values.confirmPassword && (
                    <img
                      src={crossIcon}
                      onClick={() => {
                        handleChange({
                          target: { name: "confirmPassword", value: "" },
                        });
                      }}
                      className=" ml-[11rem] h-5 w-5 filter invert absolute top-4"
                      onChange={handleChange}
                    />
                  )}
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p className="text-red-500 text-xs pl-5">
                      {errors.confirmPassword}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="form-control">
                <select
                  id="countries"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="bg-gray-50 border ml-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  style={{ width: "13.5rem" }}
                >
                  <option value="">Gender</option> 
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="date"
                  id="birthday"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ marginLeft: "1rem", width: "13rem" }}
                ></input>
              </div>
              <button
                type="submit"
                className="text-white my-6 ml-5 w-11/12 text-xl bg-blue-700 hover:bg-blue-800 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700  "
              >
                Signup
              </button>
            </form>
            <h4 className="text-[#fff] pt-3  ml-5 ">Already have an account?  <span className="text-blue-500 cursor-pointer" onClick={login}>Login</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;