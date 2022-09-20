import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === request.nextUrl.pathname.toLocaleLowerCase()) {
        return NextResponse.next();
    } else {
        const url = request.nextUrl.clone();
        url.pathname = request.nextUrl.pathname.toLocaleLowerCase();
        return NextResponse.redirect(url);
    }
}