import { useRouter } from 'next/router'

import type Platform from '@src/Platform'

export default function usePlatform(): Platform {
  const router = useRouter()
  const { platform } = router.query

  return platform === 'android' ? 'android' : 'ios'
}
