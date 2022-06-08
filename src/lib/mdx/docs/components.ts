import type { MDXComponents } from 'mdx/types'

import Link from '@src/components/docs/Link'

import baseComponents from '../components'

const components: MDXComponents = {
  ...baseComponents,
  a: Link as any,
}

export default components
