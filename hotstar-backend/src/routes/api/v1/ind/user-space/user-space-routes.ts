import { userValidation } from "validations/user-validations";
import upload from "middlewares/multer";
import {
  registerUser,
  userLogin,
  verfiyToken,
} from "controllers/v1/user/user-controllers";
import { Router } from "express";
import { checkout } from "configs/checkout";
import { isAuthFireBase } from "middlewares/firebaseAuth";
const userSpaceRoutes = Router();

userSpaceRoutes.post("/log-in", userLogin);
userSpaceRoutes.post(
  "/register",
  upload.single("profilePicture"),
  userValidation,
  registerUser
);
userSpaceRoutes.post("/subscribe/:name/:amount", checkout);
userSpaceRoutes.get("/verify-token", isAuthFireBase);
export default userSpaceRoutes;
