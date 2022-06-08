import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

import AnchorHeading from '@src/components/AnchorHeading'
import Pre from '@src/components/CodeBlock/Pre'
import ResponsiveImage from '@src/components/ResponsiveImage'
import Table from '@src/components/Table'

const components: MDXComponents = {
  a: Link as any,
  h1: AnchorHeading.H1,
  h2: AnchorHeading.H2,
  h3: AnchorHeading.H3,
  h4: AnchorHeading.H4,
  h5: AnchorHeading.H5,
  h6: AnchorHeading.H6,
  img: ResponsiveImage,
  pre: Pre,
  table: Table,
}

export default components
