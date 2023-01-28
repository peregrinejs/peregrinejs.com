import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

/**
 * Add the en locale prefix.
 *
 * @see https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
 */
export function middleware(request: NextRequest): NextResponse | undefined {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.startsWith('/_next/') &&
    !request.nextUrl.pathname.startsWith('/api/') &&
    request.nextUrl.locale === 'default'

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/en${request.nextUrl.pathname}`
    return NextResponse.redirect(url)
  }

  return undefined
}
