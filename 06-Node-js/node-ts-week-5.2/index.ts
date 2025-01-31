import express from "express";
import { requestLogger } from "./middlewares";
import { type Request, type Response } from "express";

const app = express();

app.get("/", requestLogger, (req: Request, res: Response) => {
  res.status(200).json({
    message: "WelCome to Express HTTP server",
  });
});

app.listen(3000, () => {
  console.log("[ server ] serving on http://localhost:3000");
});
