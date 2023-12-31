import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare module "express" {
  interface Request {
    userId?: string;
    adminId?: string;
  }
}

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken: string | undefined = req
      .get("Authorization")
      ?.split(" ")[1];

    if (accessToken) {
      const decodedToken = (await jwt.verify(
        accessToken,
        "this is super secret"
      )) as { userId?: string; adminId?: string };
      decodedToken.userId
        ? (req.userId = decodedToken.userId)
        : (req.adminId = decodedToken.adminId);

      next();
    } else {
      return res.json({
        msg: "token is not providede !",
      });
    }
  } catch (error) {
    console.log(error, "error in jwt");
    return res.json({
      msg: "error in jwt!!",
    });
  }
};
