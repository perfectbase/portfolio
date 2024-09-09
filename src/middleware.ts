import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("middleware");
  return createMiddleware(routing)(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ja|pt-BR)/:path*"],
};
