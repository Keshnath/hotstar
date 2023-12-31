import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
export const sportValidation = [
  body("sport")
    .trim()
    .notEmpty()
    .withMessage("Sport is required")
    .matches(/^[A-Za-z]/)
    .withMessage("sport name must start with alphabet"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const sportEventValidation = [
  body("sport").trim().notEmpty().withMessage("Sport is required"),
  body("team")
    .isAlphanumeric()
    .withMessage("team name must start with alphabet")
    .optional(),
  body("tournament").trim().notEmpty().withMessage("Tournament is required"),
  body("year")
    .isNumeric()
    .notEmpty()
    .withMessage("Year is required")
    .isLength({ max: 4 })
    .withMessage("must be in yyyy format"),
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("event").trim().notEmpty().withMessage("Event is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
export const tournamentValidation = [
  body("sport").trim().notEmpty().withMessage("Sport is required"),
  body("tournament")
    .trim()
    .notEmpty()
    .withMessage("Tournament is required")
    .matches(/^[A-Za-z]/)
    .withMessage("Tournament name must start with alphabet"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
