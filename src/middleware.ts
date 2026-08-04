import { NextRequest, NextResponse } from 'next/server';

const excludedPaths: string[] = [
  `/_next/static`,
  `/badges`,
  `/fonts`,
  `/images`,
  `/icons`,
  `/img`,
  `/logos`,
  `/js`,
  '/inxt-library',
  `DPA.pdf`,
];

const REFERRAL_COOKIE_LIFESPAN_DAYS = 2;
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

const setReferralCookie = (req: NextRequest, response: NextResponse): void => {
  const referralId = req.nextUrl.searchParams.get('ref');

  if (!referralId) return;

  response.cookies.set('REFERRAL', referralId, {
    domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
    expires: new Date(Date.now() + REFERRAL_COOKIE_LIFESPAN_DAYS * MILLISECONDS_PER_DAY),
    httpOnly: false,
    path: '/',
  });
};

const Middleware = (req: NextRequest) => {
  const isExcludedPath = excludedPaths.findIndex((path) => req.nextUrl.pathname.includes(path)) !== -1;
  if (isExcludedPath) return NextResponse.next();
  if (req.nextUrl.pathname !== req.nextUrl.pathname.toLowerCase() || req.nextUrl.pathname.includes('%20')) {
    const url = req.nextUrl.clone();
    if (url.pathname.includes('%20')) {
      const replaced = decodeURIComponent(url.pathname).replace(/\s/, '-');
      url.pathname = replaced.toLowerCase();
      return NextResponse.redirect(decodeURIComponent(url.toString()));
    } else {
      url.pathname = url.pathname.toLowerCase();
      return NextResponse.redirect(url);
    }
  }

  const response = NextResponse.next();
  setReferralCookie(req, response);
  return response;
};

export const config = {
  matcher: ['/', '/((?!api|_next|.*\\..*).*)'],
};

export default Middleware;
