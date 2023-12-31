import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
export const userValidation = [
  body("fullName").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[a-zA-Z]/)
    .matches(/[0-9]/)
    .withMessage("Password must have at least one  number and alphabet"),
  body("confirmPassword")
    .isLength({ min: 6 })
    .matches(/[a-zA-Z]/)
    .matches(/[0-9]/)
    .withMessage("Confirm Password and Password must be same"),
  body("contact").isLength({ min: 10 }).withMessage("Invalid contact number"),
  body("dob").isDate().withMessage("Invalid Date"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const adminValidation = [
  body("fullName").trim().notEmpty().withMessage("name required !"),
  body("email").trim().isEmail().withMessage("invalid email address!"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[a-zA-Z]/)
    .matches(/[0-9]/)
    .withMessage("Password must have at least one  number and alphabet"),
  body("confirmPassword")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[a-zA-Z]/)
    .matches(/[0-9]/)
    .withMessage("Password must have at least one  number and alphabet"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
