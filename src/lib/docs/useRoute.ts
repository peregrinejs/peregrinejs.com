import { useRouter } from 'next/router'

import type Platform from '@src/Platform'
import { isPlatform } from '@src/Platform'

export interface Route {
  path: string
  page: string
  platform: Platform
}

/**
 * Returns a route object for docs.
 */
export default function useRoute(): Route | null {
  const { route, query } = useRouter()

  if (route !== '/docs/[...page]' || !Array.isArray(query.page)) {
    return null
  }

  const [platform, ...pageParts] = query.page

  if (!isPlatform(platform)) {
    return null
  }

  const page = pageParts.join('/')

  return {
    path: `/docs/${platform}/${page}`,
    page,
    platform,
  }
}
