import React, { forwardRef } from 'react'

import { styled } from '@src/stitches.config'

import Box from './Box'
import LogoIcon from './LogoIcon'

const Logo = forwardRef<HTMLAnchorElement, any>(({ ...props }, ref) => {
  return (
    <Root ref={ref} {...props}>
      <LogoIcon />
      <Text>Peregrine</Text>
    </Root>
  )
})

const Root = styled(Box, {
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

const Text = styled('h1', {
  flex: 1,
  lineHeight: '$$size',
  fontSize: '$$size',
})

Logo.displayName = 'Logo'

export default Logo
