import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Paypal from "../Paypal";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState<any>("");
  const [message, setMessage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent?.id, "--------------->>>>")
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const {error  }  = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
        
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
    // console.log(data , "user payment data ----->>>")
  };

  const paymentElementOptions: any = {
    layout: "tabs",
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white  backdrop-blur-sm z-[1] ">
      {/* <Paypal/> */}
      <form id="payment-form" onSubmit={handleSubmit} className="flex flex-col justify-center">
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e: any) => setEmail(e?.target?.value)}
        />
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" className="bg-gradient-to-r from-[#0672ff] via-[#0000FD] to-[#01147C] p-2 rounded-md text-white mt-4 font-semibold">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
