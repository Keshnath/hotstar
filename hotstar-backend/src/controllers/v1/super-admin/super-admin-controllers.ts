import { NextFunction, Response, Request } from "express";
import Admin from "models/admin/Admin";
import jwt from "jsonwebtoken";
import { passwordCheck } from "utils/password-encrypt";

export const adminLogIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email: string = req.body.email;
    const password: string = req.body.password;

    const admin = await Admin.findOne({ email: email });
    if (admin) {
      const adminPass = admin.password;
      const isValid = passwordCheck.comparePassword(password, adminPass);
      if (!isValid) {
        return res.status(401).json({
          mag: "invalid email / password !",
        });
      } else {
        const token: string = jwt.sign(
          { email: email, adminId: admin._id },
          "this is super secret",
          { expiresIn: "1h" }
        );
        return res.status(200).json({
          msg: "User Login SuccessFully !!",
          accesstoken: token,
        });
      }
    } else {
      return res.status(401).json({
        msg: "Admin does't exist !!",
      });
    }
  } catch (error) {}
};

export const adminRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const fullName: string = req.body.fullName;
    const email: string = req.body.email;
    const password: string = req.body.password;
    const confirmPassword: string = req.body.confirmPassword;
    const admin = await Admin.findOne({ email: email });

    if (!admin && password === confirmPassword) {
      const hashPassword: string = await passwordCheck.hashPassword(password);
      await Admin.create({ email, password: hashPassword, fullName });
      return res.json({
        msg: "Admin Created SuccessFully !!",
      });
    } else {
      return res.json({
        msg: "Admin Already exist !!",
      });
    }
  } catch (error) {
    console.log(error, "errro in admin register !");
  }
};
