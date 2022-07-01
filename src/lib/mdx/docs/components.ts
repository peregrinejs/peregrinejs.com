import type { MDXComponents } from 'mdx/types'

import Callout from '@src/components/Callout'
import Table, { Th } from '@src/components/Table'
import YearsAgo from '@src/components/YearsAgo'
import Link from '@src/components/docs/Link'
import Template from '@src/components/docs/Template'

import baseComponents from '../components'
import { H1, H2, H3, H4, H5, H6 } from '@src/components/docs/AnchorHeading'

const components: MDXComponents = {
  ...baseComponents,
  a: Link as any,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,

  // add components here to use them in documentation mdx files via
  // next-mdx-remote (see src/pages/docs/[...page].tsx)
  Callout,
  T: Template,
  Table,
  Th,
  YearsAgo,
}

export default components
