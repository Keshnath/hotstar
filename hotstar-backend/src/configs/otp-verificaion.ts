// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

export const otpVerification = () => {
  const otpCode:number = Math.floor(100000 + Math.random() * 900000);
  const accountSid = "AC8f685ee1e8d4c596a857154471f4e8d2";
  const authToken = "9977641007d96420417e0e9e2bd7dde1";
  const verifySid = "VA19015388cb543cf757fd9007345385af";
  const client = require("twilio")(accountSid, authToken);

  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+919554738910", channel: "sms" })
    .then((verification: Response) => console.log(verification.status))
    .then(() => {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question("Please enter the OTP:", (otpCode: number) => {
        client.verify.v2
          .services(verifySid)
          .verificationChecks.create({ to: "+919554738910", code: otpCode })
          .then((verification_check: any) =>
            console.log(verification_check.status)
          )
          .then(() => readline.close());
      });
    });
};
