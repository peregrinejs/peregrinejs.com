import { useEffect } from 'react'

export function useEvent(
  target: EventTarget | undefined,
  event: string,
  handler: (event: Event) => void,
): void {
  useEffect(() => {
    target?.addEventListener(event, handler)
    return () => target?.removeEventListener(event, handler)
  }, [target, event, handler])
}
