import express from "express";
import { type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { type AuthRequest } from "./types/AuthRequest";
import { Status } from "./enum";
import { inputValidation } from "./middleware/inputValidation";
import { authorization } from "./middleware/authorization";

const app = express();
app.use(express.json());

const JWT_SECRET: string = "randomMeSecret";
const users = new Map<string, string>();

app.get("/", (_req: Request, res: Response) => {
  res.status(Status.Ok).json({
    success: true,
    message: "server [ on ]",
  });
});

app.post("/signup", inputValidation, (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!users.has(username)) {
    users.set(username, password);
    res.status(Status.Ok).json({
      success: true,
      message: "user created",
    });
  } else {
    res.status(Status.Conflict).json({
      success: false,
      message: "username already exists",
    });
  }
});

app.post("/signin", inputValidation, (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!users.has(username)) {
    res.status(Status.NotFound).json({
      success: false,
      message: "User not available",
    });
  } else {
    const userPassword = users.get(username);
    if (userPassword === password) {
      const token = jwt.sign({ username: username }, JWT_SECRET, {
        expiresIn: "30s",
      });
      res.status(Status.Ok).json({
        success: true,
        token: token,
      });
    } else {
      res.status(Status.Unauthorized).json({
        success: false,
        message: "invalid password",
      });
    }
  }
});

app.get("/me", authorization, (req: AuthRequest, res: Response) => {
  const username = req.user;

  res.status(Status.Ok).json({
    success: true,
    username: username,
  });
});

const server = app.listen(3000, () => {
  console.log("server : [ ON ]");
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("server : [ OFF]");
    process.exit(0);
  });
});
