import { type Request, type Response, type NextFunction } from "express";
import { type BodyData } from "../types/types";
import { Status } from "../enum";

const inputValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { username, password }: BodyData = req.body;

  if (!username || !password) {
    res.status(Status.BadRequest).json({
      success: false,
      message: "wrong input",
    });
    return;
  }
  next();
};

export default inputValidation;
