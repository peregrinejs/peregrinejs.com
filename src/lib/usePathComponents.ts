import { useRouter } from 'next/router'

import trimSlashes from './trimSlashes'

export default function usePathComponents(path?: string): string[] {
  const { pathname } = useRouter()

  return trimSlashes(path ?? pathname).split('/')
}
