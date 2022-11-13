import { Request, Response } from "express";
import { averageCalculator } from "../services/averageCalculator";

export const averageController = (req: Request, res: Response) => {
  const { num1, num2 } = req.body;

  if (!num1 || !num2) {
    return res.status(400).json({
      error: "This request expects two numeric parameters",
    });
  } else if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      error: "The parameter received is not of type numeric",
    });
  }

  res.status(200).send({ result: averageCalculator(num1, num2) });
};
