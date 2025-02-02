import { type AuthRequest } from "../types/types";
import { type Response, type NextFunction } from "express";

import { Status } from "../enum";

import jwt from "jsonwebtoken";

const JWT_SECRET = "myRandomKey";

const authorization = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.token;

  if (!token || typeof token !== "string") {
    res.status(Status.Unauthorized).json({
      success: false,
      message: "invalid token",
    });
    return;
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);

    if (typeof decode !== "object" || !decode || !("username" in decode)) {
      res.status(Status.Unauthorized).json({
        success: false,
        message: "Unauthorized - verification failed",
      });
      return;
    } else {
      const { username } = decode;
      req.username = username;
      next();
    }
  } catch (e) {
    res.status(Status.Unauthorized).json({
      success: false,
      message: "Unauthorized - token",
    });
    return;
  }
};

export default authorization;
