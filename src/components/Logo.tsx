import type { CSS } from '@stitches/react'
import Image from 'next/image'
import React, { forwardRef } from 'react'

import { styled, theme } from '@src/stitches.config'

export interface LogoProps {
  css?: CSS
}

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(({ ...props }, ref) => {
  const size = theme.sizes.logo.value

  return (
    <Root ref={ref} {...props}>
      <Icon src="/peregrine.svg" width={size} height={size} />
      <Text>Peregrine</Text>
    </Root>
  )
})

const Root = styled('a', {
  display: 'flex',
  height: '$sizes$logo',
  gap: 'calc($sizes$logo / 5)',
  userSelect: 'none',
})

const Icon = styled(Image, {})

const Text = styled('h1', {
  flex: 1,
  lineHeight: '$logo',
  fontSize: '$logo',
})

Logo.displayName = 'Logo'

export default Logo
