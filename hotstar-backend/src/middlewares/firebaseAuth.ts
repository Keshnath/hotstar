import { NextFunction, Request, Response } from "express";
import * as admin from "firebase-admin";
import serviceAccount from "./firebaseCredential.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});
export const isAuthFireBase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.get("Authorization");
  if (authorization) {
    const token = authorization.split(" ")[1];
    let isValid;
    try {
      isValid = await admin.auth().verifyIdToken(token as any);
      if (!isValid) {
        return res.json({
          message: "not valid",
          isValid: false,
        });
      }
      return res.json({
        message: "verified",
        isValid: true,
      });
    } catch (err) {
      return res.json({
        isValid: false,
      });
    }
  } else {
    return res.status(501).json({
      msg: "provide accessToke in header !",
    });
  }
};
