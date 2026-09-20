import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);

  // next-intl issues a 307 for unprefixed legacy URLs; use 308 (permanent)
  // instead so search engines consolidate link equity onto the /pt/... URLs.
  const location = response.headers.get("location");
  if (response.status >= 300 && response.status < 400 && location) {
    const permanentRedirect = NextResponse.redirect(location, 308);
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== "location") {
        permanentRedirect.headers.set(key, value);
      }
    });
    return permanentRedirect;
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
