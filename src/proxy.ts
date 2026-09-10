import { NextResponse } from 'next/server';

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

const setReferralCookie = (req, response) => {
  if (req.nextUrl.pathname.startsWith('/api')) return;

  const referralId = req.nextUrl.searchParams.get('ref');

  if (!referralId) return;

  response.cookies.set('REFERRAL', referralId, {
    domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
    expires: new Date(Date.now() + REFERRAL_COOKIE_LIFESPAN_DAYS * MILLISECONDS_PER_DAY),
    path: '/',
    httpOnly: false,
  });
};

const proxy = (res) => {
  const isExcludedPath = excludedPaths.findIndex((path) => res.nextUrl.pathname.includes(path)) !== -1;
  if (isExcludedPath) return NextResponse.next();
  if (res.nextUrl.pathname !== res.nextUrl.pathname.toLowerCase() || res.nextUrl.pathname.includes('%20')) {
    const url = res.nextUrl.clone();
    if (url.pathname.includes('%20')) {
      const replaced = decodeURIComponent(url.pathname).replace(/\s/, '-');
      url.pathname = replaced.toLowerCase();
      const redirect = NextResponse.redirect(decodeURIComponent(url));
      setReferralCookie(res, redirect);
      return redirect;
    } else {
      url.pathname = url.pathname.toLowerCase();
      const redirect = NextResponse.redirect(url);
      setReferralCookie(res, redirect);
      return redirect;
    }
  }
  const response = NextResponse.next();
  setReferralCookie(res, response);
  return response;
};

export const config = {
  matcher: [
    {
      source: '/((?!api|_next|.*\\..*).*)',
      locale: false,
    },
  ],
};

export default proxy;
