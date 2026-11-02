import { NextResponse } from 'next/server';

const ALLOWED = new Set(['/', '/privacy', '/terms']);

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  if (!ALLOWED.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  response.headers.set('x-locale', 'en');
  response.cookies.set('NEXT_LOCALE', 'en', { path: '/' });
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
