import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const body = request.json();
  return NextResponse.json({ message: "Hello, Next.js" });
}
