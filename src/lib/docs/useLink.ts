import { useRouter } from 'next/router'

import isOutboundUrl from '@src/lib/isOutboundUrl'

import usePathComponents from '../usePathComponents'

import usePlatform from './usePlatform'

export interface UseLinkOptions {
  /**
   * Optionally override the current platform in the link.
   */
  platform?: string
}

export interface UseLinkResult {
  href: string
  as?: string
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
  const [currentBase, ...pathComponents] = usePathComponents()
  const currentPlatform = usePlatform()
  const isOutbound = isOutboundUrl(href)

  if (currentBase !== 'docs') {
    throw new Error(`Cannot use 'useLink()' outside of docs context.`)
  }

  if (isOutbound) {
    return { href, isOutbound }
  }

  if (href.startsWith('/')) {
    return { href, isOutbound: false }
  }

  if (href.startsWith('#')) {
    const path = pathComponents.join('/') + href

    return {
      href: `/docs/${path}`,
      as: `/docs/${platform ?? currentPlatform}/${path}`,
      isOutbound: false,
    }
  }

  return {
    href: `/docs/${href}`,
    as: `/docs/${platform ?? currentPlatform}/${href}`,
    isOutbound: false,
  }
}
