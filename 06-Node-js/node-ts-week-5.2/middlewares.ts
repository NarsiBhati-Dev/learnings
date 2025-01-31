import { type Request, type Response, type NextFunction } from "express";
import chalk from "chalk";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(chalk.gray("--------------------------------------------------"));

  console.log(chalk.green.bold(`Method: ${req.method}`));
  console.log(chalk.yellow.underline(`URL: http://localhost:3000${req.url}`));
  console.log(chalk.red.italic(`Host: ${req.hostname}`));
  console.log(chalk.blue(`Time: ${new Date().toLocaleString()}`));
  console.log("IP", req.ip);

  console.log(chalk.gray("--------------------------------------------------"));

  next();
};
