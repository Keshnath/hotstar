import React, { useState } from "react";
import check from "../../assets/image/icons/check.png";
import cross from "../../assets/image/icons/cross.png";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCheckoutDetatils } from "../../Redux/Slices/checkoutSlice/checkoutSlice";
import { AppDispatch, RootState } from "../../Redux/store/Store";
import useIsAuth from "../../Hooks/useIsAuth";

const SubscriptionTable = () => {
  const [subscriptionPlan, setSubscriptionPlan] = useState<number>(899);
  const [premium, setPremium] = useState<boolean>(false);

  // const dispatch: AppDispatch = useDispatch();
  // const checkoutSessionId = useSelector(
  //   (state: RootState) => state.checkout.checkoutSessionId
  // );

  const isLogin = useIsAuth();
  const navigate = useNavigate();
  
  const makePayment = async () => {
    isLogin
      ? navigate("/in/paywall/checkout", { state: subscriptionPlan })
      : navigate("/in/paywall/log-in");

    // const stripe: any = await loadStripe(
    //   "pk_test_51Ns2oMSIYrlbiWt1iPGkyZLSjXUOEJJA3SiBU0igjHYMBzohOoje2bIfxaNVnGYHkov6BakpO4bKHoKbFTQoew6Y00AmLacNmf"
    // );

    // dispatch(getCheckoutDetatils("/my-space/subscribe/super/899"));

    // const redirectUrl = stripe.redirectToCheckout({
    //   sessionId: checkoutSessionId,
    // });

    // if (redirectUrl.error) {
    //   console.log(redirectUrl.error);
    // }
  };

  return (
    <div className="w-[50%]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-lg text-white dark:text-gray-400">
          <thead className="text-lg text-white capitalize text-left">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th
                scope="col"
                className={`px-2  py-3 font-medium ${
                  !premium ? "text-[#ffcc75]" : "text-white"
                } `}
              >
                Super
              </th>
              <th
                scope="col"
                className={` py-3  dark:bg-gray-800 font-medium ${
                  premium ? "text-[#ffcc75]" : ""
                }`}
              >
                Premium
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td
                scope="row"
                className="px-6 py-3  text-white whitespace-nowrap "
              >
                All Content <br />
                <small className="text-[#707A92]">
                  Movie , Live sports ,TV ,Special
                </small>
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  !premium ? "bg-gray-500" : ""
                }`}
              >
                <img src={check} className="h-7 w-7" />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  premium ? "bg-gray-500" : ""
                }`}
              >
                <img src={check} className="h-7 w-7" />
              </td>
            </tr>
            <tr>
              <td
                scope="row"
                className="px-6 py-3  text-white whitespace-nowrap capitalize "
              >
                Watch on tv or laptop <br />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  !premium ? "bg-gray-500" : ""
                }`}
              >
                <img src={check} className="h-7 w-7" />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  premium ? "bg-gray-500" : ""
                }`}
              >
                <img src={check} className="h-7 w-7" />
              </td>
            </tr>
            <tr>
              <td
                scope="row"
                className="px-6 py-3 capitalize  text-white whitespace-nowrap "
              >
                ads free movies and shows (expect sports) <br />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  !premium ? "bg-gray-500" : ""
                }`}
              >
                <img src={cross} className="h-7 w-7 " />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  premium ? "bg-gray-500" : ""
                }`}
              >
                <img src={check} className="h-7 w-7" />
              </td>
            </tr>
            <tr>
              <td
                scope="row"
                className="px-6 py-3 capitalize  text-white whitespace-nowrap "
              >
                number of device that can be logged in <br />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  !premium ? "bg-gray-500" : ""
                }`}
              >
                <span>2</span>
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  premium ? "bg-gray-500" : ""
                }`}
              >
                <span>4</span>
              </td>
            </tr>
            <tr>
              <td
                scope="row"
                className="px-6 py-3 capitalize  text-white whitespace-nowrap "
              >
                max video quality <br />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  !premium ? "bg-gray-500" : ""
                }`}
              >
                <span>
                  Full HD <br /> 1080p
                </span>
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  premium ? "bg-gray-500" : ""
                }`}
              >
                <span>
                  4K <br /> 2160p
                </span>
              </td>
            </tr>
            <tr>
              <td
                scope="row"
                className="px-6 py-3 capitalize  text-white whitespace-nowrap "
              >
                max audio quality <br />
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  !premium ? "bg-gray-500" : ""
                }`}
              >
                <span>Dolby Atmos</span>
              </td>
              <td
                className={`px-6 py-3 items-center ${
                  premium ? "bg-gray-500" : ""
                }`}
              >
                <span>Dolby Atmos</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex w-full justify-between mt-6 text-xl">
          <button
            className={`text-start  w-[19.5rem] h-24 p-4 rounded-lg ${
              !premium ? "border-2" : "border border-[#252833]"
            }`}
            onClick={() => {
              setPremium(false);
              setSubscriptionPlan(899);
            }}
            value={899}
          >
            {/* <div className="absolute rounded-full h-8 w-8 bg-[#01147C] top-[565px] right-[735px] items-center text-center">
              <span>&#x2713;</span>
            </div> */}
            <span className="text-[#ffcc75]">Super</span>
            <br />
            <sup>&#8377;</sup>
            <span className="text-3xl">899</span>
            <small>/Year</small>
          </button>
          <button
            className={`${
              premium ? "border-2" : "border border-[#252833] "
            } text-start  w-[19.5rem] h-24 p-4 rounded-lg`}
            onClick={() => {
              setPremium(true);
              setSubscriptionPlan(1499);
            }}
            value={1499}
          >
            <span>Premium</span>
            <br />
            <sup>&#8377;</sup>
            <span className="text-3xl">1499</span>
            <small>/Year</small>
          </button>
          <button
            className="border border-[#252833] text-start w-[19.5rem] h-24 p-4 rounded-lg"
            onClick={() => {
              setPremium(true);
            }}
            value={299}
          >
            <span>Premium</span>
            <br />
            <sup>&#8377;</sup>
            <span className="text-3xl">299</span>
            <small>/Month</small>
          </button>
        </div>

        <button
          className="w-full text-xl  font-medium bg-gradient-to-r from-[#0672ff] via-[#0000FD] to-[#01147C] p-4 rounded-lg mt-6"
          onClick={makePayment}
        >
          Continue With Super &gt;
        </button>
      </div>
    </div>
  );
};

export default SubscriptionTable;
