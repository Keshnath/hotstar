import React, { useRef, useEffect } from "react";
import {useLocation , useNavigate} from 'react-router-dom'
const Paypal = () =>  {
  const paypal = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          layout: 'vertical',
          shape:  'rect',
          label:  'paypal'
        },
        createOrder: (data : any, actions : any, err : any) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: location.state === 899 ? "super" : "premium",
                amount: {
                  value: location.state,
                },
              },
            ],
          });
        },
        onApprove: async (data : any, actions : any) => {
          const order = await actions.order.capture();
          if(order.status === 'COMPLETED')
          {navigate('/')
          console.log(actions);
        }
        },
        onError: (err : any) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
      <div ref={paypal} className="w-72"></div>
   
  );
}
export default Paypal