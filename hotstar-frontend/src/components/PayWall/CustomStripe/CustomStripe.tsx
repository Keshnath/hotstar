import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../services/api";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../../App";
import CheckoutForm from "./CheckoutForm";

const CustomStripe = () => {
  // const clientSecteFn = async () => {
  //   const res = await fetch(BASE_URL + "/my-space/subscribe/super/899", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   setClientSecret(data.clientSecret);
  // };

  // useEffect(() => {
  //   clientSecteFn();
  // }, []);

  const appearance: any = {
    theme: "stripe",
    variables: {
      colorPrimary: "#0570de",
      colorBackground: "#ffffff",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
      spacingUnit: "2px",
      borderRadius: "4px",
      // See all possible variables below
    },
  };

  const options: any = {
    appearance,
  };
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white   ">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CustomStripe;
