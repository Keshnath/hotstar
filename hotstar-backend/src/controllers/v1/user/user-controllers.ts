import { NextFunction, Request, Response } from "express";
import User from "models/user/User";
import { passwordCheck } from "utils/password-encrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email;
    const isUser = await User.findOne({ email: email });
    if (isUser) {
      return res.json({
        message: "user already exist",
      });
    } else {
      const user = new User(req.body);
      if (req.file) {
        user.profilePicture = req.file.path;
      }
      if (req.body.password === req.body.confirmPassword) {
        user.password = await passwordCheck.hashPassword(req.body.password);
      } else {
        return res.json({
          message: "password and confirm password does not match",
        });
      }
      await user.save();
      return res.json({
        message: "user created",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email: string = req.body.email;

    const password: string = req.body.password;
    const user = await User.findOne({ email: email });
    console.log(email, password, user);
    if (user) {
      const userPassword: string = user.password;
      const decryptPass: true | false = await passwordCheck.comparePassword(
        password,
        userPassword
      );
      if (!decryptPass) {
        return res.status(401).json({
          msg: "Invalid Email / Password !",
        });
      } else {
        const token: string = jwt.sign(
          { email: email, userId: user._id },
          "this is super secret",
          { expiresIn: "1h" }
        );

        return res.status(200).json({
          msg: "User Login SuccessFully !!",
          accessToken: token,
        });
      }
    } else {
      return res.status(404).json({
        msg: "User not found !",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const verfiyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.get("Authorization");
  if (authorization) {
    const token = authorization.split(" ")[1];
    let isValid;
    try {
      isValid = await jwt.verify(token, "this is super secret");
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
