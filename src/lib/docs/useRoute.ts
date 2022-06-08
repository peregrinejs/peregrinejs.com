import Platform, { isPlatform } from '@src/Platform'
import { useRouter } from 'next/router'

export interface Route {
  asPath: string
  page: string
  platform: Platform
}

/**
 * Returns a route object for docs.
 */
export default function useRoute(): Route | null {
  const { asPath, route, query } = useRouter()
  const { page } = query

  if (!page || typeof page === 'string' || route !== '/docs/[...page]') {
    return null
  }

  const [platform, ...pageParts] = page

  if (!isPlatform(platform)) {
    return null
  }

  return {
    asPath,
    page: pageParts.join('/'),
    platform,
  }
}
