import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
export const channelValidation = [
  body("channelName").trim().notEmpty().withMessage("Channel Name is Required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
export const tvGenreValidation = [
  body("genre").trim().notEmpty().withMessage("Genre is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
