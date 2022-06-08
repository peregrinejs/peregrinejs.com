import Image from 'next/image'
import React, { forwardRef } from 'react'

import { styled } from '@src/stitches.config'

import Box from './Box'

const Logo = forwardRef<HTMLAnchorElement, any>(({ ...props }, ref) => {
  return (
    <Root ref={ref} {...props}>
      <Box css={{ width: '$$size', height: '$$size' }}>
        <Icon src="/peregrine.svg" layout="responsive" width={32} height={32} />
      </Box>
      <Text>Peregrine</Text>
    </Root>
  )
})

const Root = styled('a', {
  'display': 'flex',
  'height': 32,
  'gap': 'calc($$size / 5)',
  'userSelect': 'none',
  'alignItems': 'center',

  '$$size': '24px',

  '@lg': {
    $$size: '32px',
  },
})

const Icon = styled(Image, {
  width: '$$size',
  height: '$$size',
})

const Text = styled('h1', {
  flex: 1,
  lineHeight: '$$size',
  fontSize: '$$size',
})

Logo.displayName = 'Logo'

export default Logo
