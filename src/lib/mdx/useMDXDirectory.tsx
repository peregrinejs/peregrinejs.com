import { useContext } from 'react'

import type { MDXDirectory } from './MDXDirectoryContext'
import MDXDirectoryContext from './MDXDirectoryContext'

export default function useMDXDirectory(): MDXDirectory {
  return useContext(MDXDirectoryContext)
}
