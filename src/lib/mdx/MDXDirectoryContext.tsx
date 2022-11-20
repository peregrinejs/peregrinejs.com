import { createContext } from 'react'

import type { SerializeResult } from './serialize'

export type MDXDirectory = { [key: string]: SerializeResult }

const MDXDirectoryContext = createContext<MDXDirectory>({})

export default MDXDirectoryContext
