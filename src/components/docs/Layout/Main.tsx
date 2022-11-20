import React from 'react'

import { styled } from '@src/stitches.config'

import TitleBox from './TitleBox'

export interface MainProps {
  children: React.ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => {
  return (
    <Root>
      <TitleBox />
      {children}
    </Root>
  )
}

const Root = styled('main', {
  position: 'relative',
  gridArea: 'main',
  maxWidth: '$contentMaxWidth',
  minWidth: 0,

  [`& > :nth-child(2)`]: {
    marginTop: 0,
  },
})

export default Main
