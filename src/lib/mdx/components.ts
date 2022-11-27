import type { MDXComponents } from 'mdx/types'

import { H1, H2, H3, H4, H5, H6 } from '@src/components/AnchorHeading'
import Link from '@src/components/Link'
import ResponsiveImage from '@src/components/ResponsiveImage'
import Table from '@src/components/Table'

const components: MDXComponents = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  a: Link as any,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  img: ResponsiveImage as any,
  table: Table,
}

export default components
