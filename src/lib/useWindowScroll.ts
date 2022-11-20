import throttle from 'lodash/fp/throttle'
import { useCallback, useEffect, useState } from 'react'

import { useEvent } from './useEvent'

const scrollThrottle = throttle(50)

const getWindowScrollY = (): number =>
  typeof window !== 'undefined' ? window.scrollY ?? window.pageYOffset ?? 0 : 0

export default function useWindowScroll(): number {
  const [scrollTop, setScrollTop] = useState(getWindowScrollY())

  const onScroll = useCallback(
    scrollThrottle(() => setScrollTop(getWindowScrollY())),
    [],
  )

  useEvent(
    typeof window !== 'undefined' ? window : undefined,
    'scroll',
    onScroll,
  )

  useEffect(() => onScroll.cancel)

  return scrollTop
}
