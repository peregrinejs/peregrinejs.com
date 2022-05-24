import React, { forwardRef, useState } from 'react'

import Box from '@src/components/Box'
import _Circle from '@src/icons/Circle'
import { styled } from '@src/stitches.config'

export interface IconButtonTabProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement
}

const IconButtonTab = forwardRef<HTMLDivElement, IconButtonTabProps>(
  ({ children, ...props }, ref) => {
    const [hovered, setHovered] = useState(false)

    return (
      <Root
        ref={ref}
        {...props}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {React.cloneElement(children, hovered ? { active: true } : {})}
        <Circle
          css={{
            $$size: '8px',
            $$color: children.props.active
              ? 'rgb($colors$gray1)'
              : 'rgb($colors$gray3)',
          }}
        />
      </Root>
    )
  },
)

const Root = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 4,
  cursor: 'pointer',
})

const Circle = styled(_Circle, {
  marginTop: 5,
  width: '$$size',
  height: '$$size',
  color: '$$color',
})

IconButtonTab.displayName = 'IconButtonTab'

export default IconButtonTab
