// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import Form from "./Form";
// import { stripePromise } from "../../../App";
// import CheckoutForm from "./Form";
// import { BACKEDN_BASE_URL, BASE_URL } from "../../../services/api";

// const CheckoutFrom = () => {
//   const [clientSecret, setClientSecret] = useState();
//   const clientSecteFn = async()=>{
//     const res = await fetch(BASE_URL + "/my-space/subscribe/super/899", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
  
//     })
//     const data = await res.json()
//     console.log(data)
//     setClientSecret(data.clientSecret)
//   }

//   useEffect(() => {
//     clientSecteFn()
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options  = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           hiii 
//         </Elements>
//       )}
//     </div>
//   );
// };

// export default CheckoutFrom;


import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../../App";
import CheckoutForm from "./PaymentForm";
import { BACKEDN_BASE_URL, BASE_URL } from "../../../services/api";
import PaymentForm from "./PaymentForm";

const CheckoutFrom: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const clientSecteFn = async () => {
    const res = await fetch(BASE_URL + "/my-space/subscribe/super/899", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    setClientSecret(data.clientSecret);
  };

  useEffect(() => {
    clientSecteFn();
  }, []);

  const appearance:any = {
    theme: 'stripe',
  };

  const options:any = { 
    clientSecret,
    appearance,
  };
  

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm/>
        </Elements>
      )}
    </div>
  );
};

export default CheckoutFrom;

