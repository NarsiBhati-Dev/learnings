import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const JWT_SECRET = "myPassSecret";

export const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();

  const token = jwt.sign({ username }, JWT_SECRET);

  return NextResponse.json({
    message: "signin successfully",
    token,
  });
};

export const GET = () => {
  NextResponse.json({
    url: "https://stock.adobe.com/search?k=beautiful+pictures",
  });
};
