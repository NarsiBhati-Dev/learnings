import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    username: "Narsi",
    email: "narsi2000@gmail.com",
  });
}
