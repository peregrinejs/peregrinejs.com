import useEvent from '@imhoff/react-hooks/useEvent'
import useMediaQuery from '@imhoff/react-hooks/useMediaQuery'
import { MDXProvider } from '@mdx-js/react'
import { useAtom } from 'jotai'
import inRange from 'lodash/fp/inRange'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import bpAtom from '@src/atoms/bpAtom'
import sidebarAtom from '@src/atoms/sidebarAtom'
import baseComponents from '@src/lib/mdx/components'
import {
  globalStyles,
  media,
  shikiCopySize,
  shikiCopySpacing,
} from '@src/stitches.config'

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
        event instanceof PointerEvent &&
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
            .writeText(text)
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
    <MDXProvider components={baseComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
