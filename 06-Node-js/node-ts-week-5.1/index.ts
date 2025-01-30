import express from "express";
import { type Request, type Response } from "express";

const app = express();

app.get("/add", (req: Request, res: Response) => {
  const num1: number = parseInt(req.query.a as string);
  const num2: number = parseInt(req.query.b as string);

  res.status(200).json({
    add: num1 + num2,
  });
});
app.get("/subtract", (req: Request, res: Response) => {
  const num1: number = parseInt(req.query.a as string);
  const num2: number = parseInt(req.query.b as string);

  res.status(200).json({
    subtract: num1 - num2,
  });
});

app.get("/multiply", (req: Request, res: Response) => {
  const num1: number = parseInt(req.query.a as string);
  const num2: number = parseInt(req.query.b as string);

  res.status(200).json({
    multiple: num1 * num2,
  });
});

app.get("/divide", (req: Request, res: Response) => {
  const num1: number = parseInt(req.query.a as string);
  const num2: number = parseInt(req.query.b as string);

  if (num1 !== 0 && num2 !== 0) {
    const divide = num1 / num2;
    res.status(200).json({
      divide: divide,
    });
    return;
  }
  res.status(400).json({
    message: `can't divide ${num1} with ${num2} `,
  });
});

app.listen(3000, () => {
  console.log("[ server ] serving at http://localhost:3000");
});
