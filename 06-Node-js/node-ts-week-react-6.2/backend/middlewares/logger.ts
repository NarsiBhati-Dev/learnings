import { type Request, type Response, type NextFunction } from "express";

const logger = (req: Request, _res: Response, next: NextFunction): void => {
  console.log(req.method, " Request come to ", req.path, "endpoint");
  next();
};

export default logger;
