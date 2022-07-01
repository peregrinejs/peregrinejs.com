import type { CSS } from '@stitches/react'
import React, { forwardRef } from 'react'

import { styled } from '@src/stitches.config'
import ButtonBase from './ButtonBase'

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon: React.ExoticComponent<{ css?: CSS }>
  css?: CSS
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ active = false, css, icon: Icon, ...props }, ref) => {
    return (
      <Root
        {...props}
        ref={ref}
        css={{
          '$$size': '32px',
          '$$color-active': '$colors$gray1',
          '$$color': active ? '$$color-active' : '$colors$gray3',
          ...css,
        }}
      >
        <Icon css={{ width: '$$size', height: '$$size' }} />
      </Root>
    )
  },
)

const Root = styled(ButtonBase, {
  'cursor': 'pointer',
  'color': 'rgb($$color)',
  'width': '$$size',
  'height': '$$size',

  '&:hover': {
    color: 'rgb($$color-active)',
  },
})

IconButton.displayName = 'IconButton'

export default IconButton
