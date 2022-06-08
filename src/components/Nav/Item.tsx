import Link from 'next/link'
import React from 'react'

import _Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

export interface ItemProps {
  href: string
  children: React.ReactNode
}

const Item = ({ href, children }: ItemProps): JSX.Element => {
  return (
    <Link href={href} passHref>
      <Root>
        <Text>{children}</Text>
      </Root>
    </Link>
  )
}

const Root = styled('a', {
  display: 'block',
  padding: '$navItemPaddingY $navItemPaddingX',
  fontWeight: '$bold',
})

const Text = styled(_Text, {
  color: 'rgb($gray1)',
})

export default Item
