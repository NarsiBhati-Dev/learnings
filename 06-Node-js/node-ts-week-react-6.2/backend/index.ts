import express from "express";
import { type Request, type Response } from "express";

import jwt from "jsonwebtoken";

// middlewares
import inputValidation from "./middlewares/inputValidation";
import authorization from "./middlewares/authorization";
import logger from "./middlewares/logger";

import { Status } from "./enum";
import type { AuthRequest } from "./types/types";
import cors from "cors";

const app = express();
const JWT_SECRET = "myRandomKey";
const users = new Map<string, string>();

app.use(express.json());
app.use(cors());

app.post("/signup", logger, inputValidation, (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (users.has(username)) {
    res.status(Status.Conflict).json({
      success: false,
      message: "user already exist",
    });
    return;
  } else {
    users.set(username, password);
    res.status(Status.Ok).json({
      success: true,
      message: "account created successfully",
    });
  }
});

app.post("/login", logger, inputValidation, (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!users.has(username)) {
    res.status(Status.NotFound).json({
      success: false,
      message: "username does not exist",
    });
    return;
  }

  const userPassword = users.get(username);
  if (userPassword !== password) {
    res.status(Status.Unauthorized).json({
      success: false,
      message: "please check your password",
    });
    return;
  } else {
    const token = jwt.sign({ username: username }, JWT_SECRET);
    res.status(Status.Ok).json({
      success: true,
      message: "Signin successfully",
      token,
    });
    return;
  }
});

app.get("/me", logger, authorization, (req: AuthRequest, res: Response) => {
  const username = req.username;

  res.status(Status.Ok).json({
    success: true,
    username: username,
  });
});

app.listen(3000, () => {
  console.log("[ server : 3000] : ON");
});
