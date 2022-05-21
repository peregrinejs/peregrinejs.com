import { MDXProvider } from '@mdx-js/react'
import { useAtom } from 'jotai'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { useEffect } from 'react'

import bpAtom from '@src/atoms/bpAtom'
import sidebarAtom from '@src/atoms/sidebarAtom'
import AnchorHeading from '@src/components/AnchorHeading'
import Link from '@src/components/Link'
import Table from '@src/components/Table'
import useMediaQuery from '@src/lib/useMediaQuery'
import { globalStyles, media } from '@src/stitches.config'

const ResponsiveImage = ({ alt, ...props }: any): JSX.Element => {
  return <Image alt={alt} layout="responsive" {...props} />
}

const components = {
  img: ResponsiveImage,
  h1: AnchorHeading.H1,
  h2: AnchorHeading.H2,
  h3: AnchorHeading.H3,
  h4: AnchorHeading.H4,
  h5: AnchorHeading.H5,
  h6: AnchorHeading.H6,
  a: Link,
  table: Table,
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  globalStyles()

  const [bp, setBp] = useAtom(bpAtom)
  const [, setSidebar] = useAtom(sidebarAtom)
  const isMd = useMediaQuery(media.md)
  const isLg = useMediaQuery(media.lg)

  useEffect(
    () => setBp(() => (isLg ? 'lg' : isMd ? 'md' : null)),
    [isMd, isLg, setBp],
  )

  useEffect(
    () => setSidebar(sidebar => ({ ...sidebar, open: bp !== null })),
    [bp, setSidebar],
  )

  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
