import { useContext } from 'react'

import type { Frontmatter } from '@src/lib/mdx/serialize'

import FrontmatterContext from './FrontmatterContext'

export default function useFrontmatterContext(): Frontmatter {
  return useContext(FrontmatterContext)
}
