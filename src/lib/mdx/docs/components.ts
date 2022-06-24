import type { MDXComponents } from 'mdx/types'

import Table, { Th } from '@src/components/Table'
import YearsAgo from '@src/components/YearsAgo'
import Template from '@src/components/docs/Template'
import Link from '@src/components/docs/Link'

import baseComponents from '../components'

const components: MDXComponents = {
  ...baseComponents,
  a: Link as any,

  // add components here to use them in documentation mdx files via
  // next-mdx-remote (see src/pages/docs/[...page].tsx)
  T: Template,
  Table,
  Th,
  YearsAgo,
}

export default components
