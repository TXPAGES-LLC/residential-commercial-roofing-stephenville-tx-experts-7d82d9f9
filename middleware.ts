import { NextRequest, NextResponse } from 'next/server'

const PREFERRED_HOST = 'heritageroofingtexas.com'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host') ?? ''

  // Strip port for comparison (dev environments)
  const bareHost = host.replace(/:\d+$/, '')

  let redirectNeeded = false

  // 1. Enforce HTTPS — Vercel handles this at the edge,
  //    but guard in middleware for any proxy forwarding via x-forwarded-proto
  const proto = request.headers.get('x-forwarded-proto')
  if (proto && proto !== 'https') {
    url.protocol = 'https:'
    redirectNeeded = true
  }

  // 2. www → non-www (301)
  if (bareHost === `www.${PREFERRED_HOST}`) {
    url.host = PREFERRED_HOST
    redirectNeeded = true
  }

  // 3. Trailing slash removal — never add or keep trailing slashes
  //    Skip the root path "/"
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '')
    redirectNeeded = true
  }

  // 4. Lowercase URL path enforcement
  const lowercasePath = url.pathname.toLowerCase()
  if (url.pathname !== lowercasePath) {
    url.pathname = lowercasePath
    redirectNeeded = true
  }

  if (redirectNeeded) {
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff|woff2|ttf|otf|map)).*)',
  ],
}
