import { useAtom } from 'jotai'
import React, { useEffect, useRef } from 'react'

import bpAtom from '@src/atoms/bpAtom'
import docsTitleBoxAtom from '@src/atoms/docsTitleBoxAtom'
import Box from '@src/components/Box'
import createSlug from '@src/lib/createSlug'
import useFrontmatterContext from '@src/lib/docs/useFrontmatterContext'
import { styled } from '@src/stitches.config'

import PlatformSelect from './PlatformSelect'

const TitleBox = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const [bp] = useAtom(bpAtom)
  const [, setState] = useAtom(docsTitleBoxAtom)
  const { title } = useFrontmatterContext()
  const slug = title ? createSlug(title) : undefined
  const href = slug ? `#${slug}` : undefined

  useEffect(() => {
    if (ref.current) {
      const currentHeight = ref.current.offsetHeight

      setState(state =>
        bp
          ? state.height === currentHeight
            ? state
            : { ...state, height: currentHeight }
          : { ...state, height: 0 },
      )
    }
  }, [bp, title, setState])

  return (
    <Root id={slug} ref={ref}>
      <a href={href}>
        <Title>{title}</Title>
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
    padding: '0.5rem 0',
    backgroundColor: 'rgba($contentbg / 0.7)',
    backdropFilter: 'blur(2.5px) saturate(250%)',
    zIndex: 1,
  },
})

const Title = styled('h1', {
  lineHeight: '1em',
})

export default TitleBox
