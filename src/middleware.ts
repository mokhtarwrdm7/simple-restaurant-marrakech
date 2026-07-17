import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["fr", "en"];
// FR default: Marrakech's clientele and the house's own posts are French-first.
const DEFAULT_LOCALE = "fr";

// Redirect any path missing a locale prefix to the default locale, so FR lives
// at /fr and EN at /en while "/" forwards to /fr. One DRY route tree with a
// correct <html lang> per locale.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
