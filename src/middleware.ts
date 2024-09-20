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
  '/api',
  '/inxt-library',
  '/cookiebanner.style.css',
  '/favicon.ico',
  '/manifest.json',
  '/192.png',
  `DPA.pdf`,
];

const allowedBrazilianPath = ['/lifetime/celebration/brazil'];

const Middleware = (req: NextRequest) => {
  const isExcludedPath = excludedPaths.findIndex((path) => req.nextUrl.pathname.includes(path)) !== -1;
  if (isExcludedPath) return NextResponse.next();

  console.log('Si o que', req.nextUrl.locale, req.nextUrl.pathname);
  if (req.nextUrl.locale === 'pt-br' && !allowedBrazilianPath.includes(req.nextUrl.pathname)) {
    console.log('Si o que', req.nextUrl.pathname);
    return NextResponse.redirect(`https://internxt.com${req.nextUrl.pathname}`);
  }

  if (req.nextUrl.pathname !== req.nextUrl.pathname.toLowerCase() || req.nextUrl.pathname.includes('%20')) {
    const url = req.nextUrl.clone();
    if (url.pathname.includes('%20')) {
      const replaced = decodeURIComponent(url.pathname).replace(/\s/, '-');
      url.pathname = replaced.toLowerCase();
      return NextResponse.redirect(decodeURIComponent(url.pathname));
    } else {
      url.pathname = url.pathname.toLowerCase();
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/:lang/:path*'],
};

export default Middleware;
