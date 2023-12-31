import { Express, Request, Response, NextFunction } from "express";
import Stripe from "stripe";



export const checkout = async (
  req: Request,
  res: Response,
  next: NextFunction
  ) => {

  const stripeSecretKey: any = process.env.STRIPE_SECRET_KEY;
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2023-08-16",
  });
  const amount: number = parseInt(req.params.amount, 10);
  // const name = req.params.name;
  // console.log(amount, name);
  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: "inr",
  //         product_data: {
  //           name: name,
  //         },
  //         unit_amount: amount * 100,
  //       },
  //       quantity: 1,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: "http://localhost:3000/in/home",
  //   cancel_url: "http://localhost:3000/in/paywall/checkout",
  // });

  // return res.json({ checkoutSessionId: session.id });

  // this code is for custom payment methods

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount ,
    currency: "inr",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const webhook = (req: Request, res: Response) => {
  const stripeSecretKey: any = process.env.STRIPE_SECRET_KEY;
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2023-08-16",
  });
  const sig: any = req.headers["stripe-signature"];
  const webHookSecretKey: any = process.env.WEBHOOK_ENDPOINT_SECRET;
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webHookSecretKey);
  } catch (err: any) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 res to acknowledge receipt of the event
  res.send(event);
};
