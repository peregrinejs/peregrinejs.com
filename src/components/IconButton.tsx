import type { CSS } from '@stitches/react'
import React, { forwardRef } from 'react'

import Box from '@src/components/Box'
import { styled } from '@src/stitches.config'

export interface IconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  icon: React.ExoticComponent<{ css?: CSS }>
  size?: 32
}

const IconButton = forwardRef<HTMLDivElement, IconButtonProps>(
  ({ active = false, icon: Icon, size = 32, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        {...props}
        css={{
          color: active ? '$gray1' : undefined,
          width: size,
          height: size,
        }}
      >
        <Icon css={{ size }} />
      </Root>
    )
  },
)

const Root = styled(Box, {
  'cursor': 'pointer',
  'color': '$gray3',
  'borderRadius': 32,

  '&:hover': {
    color: '$gray1',
  },
})

IconButton.displayName = 'IconButton'

export default IconButton
