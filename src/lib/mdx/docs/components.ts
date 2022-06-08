import type { MDXComponents } from 'mdx/types'

import Link from '@src/components/docs/Link'
import YearsAgo from '@src/components/YearsAgo'
import Content from '@src/components/docs/Content'
import Platform from '@src/components/docs/Platform'
import Table, { Th } from '@src/components/Table'

import baseComponents from '../components'

const components: MDXComponents = {
  ...baseComponents,
  a: Link as any,

  // add components here to use them in documentation mdx files via
  // next-mdx-remote (see src/pages/docs/[...page].tsx)
  Content,
  Table,
  Th,
  YearsAgo,
  Platform,
}

export default components
