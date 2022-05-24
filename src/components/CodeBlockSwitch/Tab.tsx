import React from 'react'
import { styled } from '@src/stitches.config'
import Box from '../Box'

export interface TabProps {
  name: string
  children?: React.ReactNode
}

const Tab = ({ name, children }: TabProps) => {
  return <Root>{children}</Root>
}

const Root = styled(Box, {
  [`& pre`]: {
    margin: 0,
  },
})

export default Tab
