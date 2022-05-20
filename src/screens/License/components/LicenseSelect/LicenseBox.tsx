import React from 'react'

import Box from '@src/components/Box'
import { styled } from '@src/stitches.config'

export interface LicenseBoxProps {
  title: string
  children: React.ReactNode
}

const LicenseBox = ({ title, children }: LicenseBoxProps): JSX.Element => {
  return (
    <Root>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Root>
  )
}

const Root = styled(Box, {
  width: '100%',
  borderStyle: 'solid',
  borderColor: '$gray4',
  borderWidth: 1,
  backgroundColor: '$gray5',
})

const Title = styled('h4', {
  margin: '1em',
  textAlign: 'center',
})

const Body = styled(Box, {
  margin: '1em',
})

export default LicenseBox
