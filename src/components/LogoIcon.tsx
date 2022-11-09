import type { CSS } from '@stitches/react'
import Image from 'next/image'
import React from 'react'

import { styled } from '@src/stitches.config'

import Box from './Box'

export interface LogoIconProps {
  css?: CSS
}

const LogoIcon = ({ css }: LogoIconProps): JSX.Element => {
  return (
    <Root css={css}>
      <Icon alt="Peregrine Logo" src="/peregrine.svg" width={32} height={32} />
    </Root>
  )
}

const Root = styled(Box, {
  width: '$$size',
  height: '$$size',
})

const Icon = styled(Image, {
  width: '$$size',
  height: '$$size',
})

export default LogoIcon
