import React, { forwardRef } from 'react'

import Box from '@src/components/Box'
import IconButtonTab from '@src/components/IconButtonTab'
import { styled } from '@src/stitches.config'

export interface IconButtonTabsProps {
  children: React.ReactNode
}

const IconButtonTabs = forwardRef<HTMLDivElement, IconButtonTabsProps>(
  ({ children, ...props }, ref) => {
    const tabs = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        throw new Error(
          'IconButtonTabs children must be valid IconButton elements',
        )
      }

      return (
        <IconButtonTab onClick={child.props.onClick}>{child}</IconButtonTab>
      )
    })

    return (
      <Root ref={ref} {...props}>
        {tabs}
      </Root>
    )
  },
)

const Root = styled(Box, {
  display: 'flex',
})

IconButtonTabs.displayName = 'IconButtonTabs'

export default IconButtonTabs
