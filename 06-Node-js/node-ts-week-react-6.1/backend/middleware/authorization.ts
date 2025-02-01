import { type Request, type Response, type NextFunction } from "express";
import { Status } from "../enum";
import jwt from "jsonwebtoken";
import { type AuthRequest } from "../types/AuthRequest";
const JWT_SECRET: string = "randomMeSecret";

export const authorization = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.token;
  if (!token) {
    res.status(Status.Unauthorized).json({
      success: false,
      message: "Unauthorized - token not given",
    });
    return;
  }

  if (typeof token !== "string") {
    res.status(Status.Unauthorized).json({
      success: false,
      message: "Unauthorized - invalid token type",
    });
    return;
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    if (typeof decode !== "object" || !decode || !("username" in decode)) {
      res.status(Status.Unauthorized).json({
        success: false,
        message: "Unauthorized - ",
      });
      return;
    } else {
      const { username } = decode;
      req.user = username;
      next();
    }
  } catch (e) {
    res.status(Status.Unauthorized).json({
      success: false,
      message: "Unauthorized - token not valid",
    });
    return;
  }
};
