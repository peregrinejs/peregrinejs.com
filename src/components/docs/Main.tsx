import React from 'react'

import TitleBox from './TitleBox'
import { styled } from '@src/stitches.config'

export interface MainProps {
  children: React.ReactNode
  title?: string
  titleSlug?: string
}

const Main = ({ children, title, titleSlug }: MainProps): JSX.Element => {
  return (
    <Root>
      <TitleBox title={title} titleSlug={titleSlug} />
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
