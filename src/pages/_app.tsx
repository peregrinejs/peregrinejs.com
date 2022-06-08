import { MDXProvider } from '@mdx-js/react'
import { useAtom } from 'jotai'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import bpAtom from '@src/atoms/bpAtom'
import sidebarAtom from '@src/atoms/sidebarAtom'
import baseComponents from '@src/lib/mdx/components'
import useMediaQuery from '@src/lib/useMediaQuery'
import { globalStyles, media } from '@src/stitches.config'

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
    <MDXProvider components={baseComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
