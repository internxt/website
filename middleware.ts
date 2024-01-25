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

const Middleware = (res) => {
  const isExcludedPath = excludedPaths.findIndex((path) => res.nextUrl.pathname.includes(path)) !== -1;
  if (isExcludedPath) return NextResponse.next();
  if (res.nextUrl.pathname !== res.nextUrl.pathname.toLowerCase() || res.nextUrl.pathname.includes('%20')) {
    const url = res.nextUrl.clone();
    if (url.pathname.includes('%20')) {
      const replaced = decodeURIComponent(url.pathname).replace(/\s/, '-');
      url.pathname = replaced.toLowerCase();
      return NextResponse.redirect(decodeURIComponent(url));
    } else {
      url.pathname = url.pathname.toLowerCase();
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
};

export const config = {
  matcher: ['/:lang/:path*'],
};

export default Middleware;
