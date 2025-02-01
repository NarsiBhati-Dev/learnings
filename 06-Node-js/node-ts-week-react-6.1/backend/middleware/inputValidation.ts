import { type Request, type Response, type NextFunction } from "express";
import { Status } from "../enum";

export const inputValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(Status.BadRequest).json({
      success: false,
      message: "wrong input",
    });
    return;
  } else next();
};
