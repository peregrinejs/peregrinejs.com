import React from 'react'

import Box from '@src/components/Box'
import Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

export interface CategoryProps {
  heading: string
  children?: React.ReactNode
}

const Category = ({ heading, children }: CategoryProps): JSX.Element => {
  return (
    <Root>
      <Heading>{heading}</Heading>
      {children}
    </Root>
  )
}

const Root = styled(Box, {})

const Heading = styled(Text, {
  display: 'block',
  fontWeight: '$bold',
  padding: '0 $headerPadding 0.25em',
})

export default Category
