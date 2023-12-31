import securePayment from "../../assets/image/payment/securetick.png";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import Upi from "./Upi";
import Paytm from "./Paytm";
import NetBanking from "./NetBanking";
import React from "react";
const Payment = () => {
  return (
    <>
      <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1]">
        <div className="max-w-4xl w-5/6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col gap-8">
            <CreditCard />
            <DebitCard />
            <Upi />
            <Paytm />
            <NetBanking />
          </div>
          <div className="grid col-span-1">
            <div className="flex gap-3 m-8 ml-80 text-sm ">
              <img
                src={securePayment}
                className="w-12 filter brightness-150 contrast-200 "
              />
              <p className="text-[#8f98b2]    ">
                100% safe <br />& secure Payment
              </p>
            </div>
            <div className="text-sm">
              <p className="pl-64 text-[#8f98b2] ">
                You will be charged ₹899 every year until you cancel.
              </p>
              <p className="pl-32 text-[#8f98b2] ">
                By Proceeding, I confirm that I am over 18, and I agree to the{" "}
                <span className="underline text-black cursor-pointer">
                  {" "}
                  subscriber agreement
                </span>{" "}
                and{" "}
                <span className="underline text-black cursor-pointer">
                  {" "}
                  privacy policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
