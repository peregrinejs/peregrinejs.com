import React, { useLayoutEffect, useRef } from 'react'

import Box from '@src/components/Box'
import PlatformSelect from '@src/components/docs/PlatformSelect'
import { styled } from '@src/stitches.config'
import { useAtom } from 'jotai'
import docsTitleBoxAtom from '@src/atoms/docsTitleBoxAtom'

export interface TitleBoxProps {
  title?: string
  titleSlug?: string
}

const TitleBox = ({ title, titleSlug }: TitleBoxProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const [, setState] = useAtom(docsTitleBoxAtom)

  useLayoutEffect(() => {
    if (ref.current) {
      const currentHeight = ref.current.offsetHeight

      setState(state =>
        state.height === currentHeight
          ? state
          : { ...state, height: currentHeight },
      )
    }
  })

  return (
    <Root ref={ref}>
      <a href={titleSlug ? `#${titleSlug}` : undefined}>
        <h1>{title}</h1>
      </a>
      <PlatformSelect />
    </Root>
  )
}

const Root = styled(Box, {
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'space-between',
  'padding': '1em 0',

  '@md': {
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba($bg / 0.88)',
    backdropFilter: 'blur(2px) saturate(250%)',
    zIndex: 1,
  },
})

export default TitleBox
