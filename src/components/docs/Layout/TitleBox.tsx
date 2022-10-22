import { useAtom } from 'jotai'
import React, { useEffect, useRef } from 'react'

import docsTitleBoxAtom from '@src/atoms/docsTitleBoxAtom'
import { createSlug } from '@src/components/AnchorHeading'
import Box from '@src/components/Box'
import useFrontmatterContext from '@src/lib/docs/useFrontmatterContext'
import { styled } from '@src/stitches.config'

import PlatformSelect from './PlatformSelect'

const TitleBox = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const [, setState] = useAtom(docsTitleBoxAtom)
  const { title } = useFrontmatterContext()
  const href = title ? `#${createSlug(title)}` : undefined

  useEffect(() => {
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
      <a href={href}>
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

  '@md': {
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba($contentbg / 0.7)',
    backdropFilter: 'blur(2.5px) saturate(250%)',
    zIndex: 1,
  },
})

export default TitleBox
