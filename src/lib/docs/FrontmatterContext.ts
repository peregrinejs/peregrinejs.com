import type { Context } from 'react'
import { createContext } from 'react'

import type { Frontmatter } from '@src/lib/mdx/serialize'

const FrontmatterContext: Context<Frontmatter> = createContext({})

export default FrontmatterContext
