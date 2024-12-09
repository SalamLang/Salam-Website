import { NextResponse } from "next/server";

export function middleware(request) {
  const theme = request.cookies.get("theme")?.value || "light";
  const response = NextResponse.next();

  response.cookies.set("theme", theme, {
    path: "/",
    maxAge: Infinity, 
  });

  return response;
}
