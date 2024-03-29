import useEvent from '@imhoff/react-hooks/useEvent'
import useMediaQuery from '@imhoff/react-hooks/useMediaQuery'
import { MDXProvider } from '@mdx-js/react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useAtom } from 'jotai'
import inRange from 'lodash/fp/inRange'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import bpAtom from '@src/atoms/bpAtom'
import sidebarAtom from '@src/atoms/sidebarAtom'
import type { MDXDirectory } from '@src/lib/mdx'
import { MDXDirectoryContext } from '@src/lib/mdx'
import baseComponents from '@src/lib/mdx/components'
import {
  globalStyles,
  media,
  shikiCopySize,
  shikiCopySpacing,
} from '@src/stitches.config'

export interface AppPageProps {
  readonly mdx?: MDXDirectory
}

const MyApp = ({
  Component,
  pageProps,
}: AppProps<AppPageProps>): JSX.Element => {
  globalStyles()

  const [supabase] = useState(() => createBrowserSupabaseClient())
  const [bp, setBp] = useAtom(bpAtom)
  const [, setSidebar] = useAtom(sidebarAtom)
  const isMd = useMediaQuery(media.md)
  const isLg = useMediaQuery(media.lg)

  useEffect(
    () => setBp(() => (isLg ? 'lg' : isMd ? 'md' : null)),
    [isMd, isLg, setBp],
  )

  useEffect(() => {
    if (bp === 'md') {
      setSidebar(sidebar => ({ ...sidebar, open: true }))
    }
  }, [bp, setSidebar])

  useEvent(
    typeof document !== 'undefined' ? document : undefined,
    'click',
    (event: Event) => {
      if (
        event instanceof MouseEvent &&
        event.target instanceof HTMLPreElement &&
        event.target.classList.contains('shiki')
      ) {
        const { dataset, innerText: text, offsetWidth: width } = event.target
        const { offsetX: x, offsetY: y } = event
        const positionX = width - shikiCopySpacing - shikiCopySize
        const positionY = shikiCopySpacing

        if (
          inRange(positionX, positionX + shikiCopySize, x) &&
          inRange(positionY, positionY + shikiCopySize, y)
        ) {
          navigator.clipboard
            .writeText(text.replace(/\n\n/g, '\n'))
            .then(() => {
              dataset.copied = 'true'
              window.setTimeout(() => delete dataset.copied, 1000)
            })
            .catch(() => {
              alert('Browser does not support clipboard access')
            })
        }
      }
    },
  )

  return (
    <MDXDirectoryContext.Provider value={pageProps.mdx ?? {}}>
      <MDXProvider components={baseComponents}>
        <SessionContextProvider supabaseClient={supabase}>
          <Component {...pageProps} />
        </SessionContextProvider>
      </MDXProvider>
    </MDXDirectoryContext.Provider>
  )
}

export default MyApp
