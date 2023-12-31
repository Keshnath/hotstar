import {
  AddressElement,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
const CheckoutForm = () => {
  const stripe: any = useStripe();
  const elements: any = useElements();
  const [error, setError] = useState<any>(null);
  const [addressOnCard, setAddressOnCard] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [name, setName] = useState<any>();
  const [email, setEmail] = useState<any>();
  const handlePayment = async (event: any) => {
    event.preventDefault();

    const result = await stripe?.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: {
        address: addressOnCard,
        name: name,
        phone: phone,
        email: email,
      },
    });

    if (result?.error) {
      setError(result?.error.message);
    } else {
      // Payment method creation succeeded
      const paymentMethod = result?.paymentMethod;
      console.log("Payment Method:", paymentMethod);
    }
  };

  return (
    <div className="border-black border h-96 w-96">
      <div>
        <span>Card Number</span>
        <CardNumberElement />
      </div>
      <CardExpiryElement />
      <CardCvcElement />
      <h1>Shipping address</h1>
      <AddressElement
        options={{ mode: "billing" }}
        onChange={(e: any) => {
          if (e.complete) {
            const address = e.value.address;
            setAddressOnCard(address);
            setName(e.value.name);
            setPhone(e.value.phone);
          }
        }}
      />
      <button onClick={(event: any) => handlePayment(event)}>Submit</button>
    </div>
  );
};

export default CheckoutForm;
