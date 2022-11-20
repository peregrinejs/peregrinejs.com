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
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  padding: '1em',
  borderStyle: 'solid',
  borderColor: 'rgb($gray4)',
  borderWidth: 1,
  backgroundColor: 'rgb($gray5)',
})

const Title = styled('h4', {
  textAlign: 'center',
})

const Body = styled(Box, {
  'display': 'flex',
  'flexDirection': 'column',
  'flex': 1,
  'gap': '1em',

  '& > *': {
    margin: 0,
  },
})

export default LicenseBox
