import { type Request } from "express";

interface AuthRequest extends Request {
  username?: string;
}

interface BodyData {
  username: string;
  password: string;
}

export { type BodyData, type AuthRequest };
