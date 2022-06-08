import isOutboundUrl from '@src/lib/isOutboundUrl'

import useRoute from './useRoute'

export interface UseLinkOptions {
  /**
   * Optionally override the current platform in the link.
   */
  platform?: string
}

export interface UseLinkResult {
  href: string
  isOutbound: boolean
}

/**
 * Provides Link props for a link within docs context.
 *
 * Links within docs can be one of the following:
 *  - External: starts with `https://`
 *  - Internal: starts with `/`, e.g. `/license`
 *  - Relative: starts with `#`, e.g. `#introduction`
 *  - otherwise, the link is prepended with `/docs/<platform>/`
 */
export default function useLink(
  href: string,
  { platform }: UseLinkOptions = {},
): UseLinkResult {
  const route = useRoute()

  if (!route) {
    throw new Error(`Cannot use 'useLink()' outside of docs context.`)
  }

  const isOutbound = isOutboundUrl(href)

  if (isOutbound) {
    return { href, isOutbound }
  }

  if (href.startsWith('/')) {
    return { href, isOutbound: false }
  }

  if (href.startsWith('#')) {
    const path = route.page + href

    return {
      href: `/docs/${platform ?? route.platform}/${path}`,
      isOutbound: false,
    }
  }

  return {
    href: `/docs/${platform ?? route.platform}/${href}`,
    isOutbound: false,
  }
}
