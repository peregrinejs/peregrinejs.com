import type Platform from '@src/Platform'

import useRoute from './useRoute'

export default function usePlatform(): Platform {
  const route = useRoute()

  return route?.platform ?? 'ios'
}
