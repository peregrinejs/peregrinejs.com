import React from 'react'

import Link from '@src/components/Link'
import _Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

export interface ItemProps {
  href: string
  children: React.ReactNode
}

const Item = ({ href, children }: ItemProps): JSX.Element => {
  return (
    <Link
      href={href}
      css={{
        $$iconSize: '16px',
        $$iconMarginLeft: '-4px',
      }}
    >
      <Text>{children}</Text>
    </Link>
  )
}

const Text = styled(_Text, {
  color: 'rgb($gray1)',
  padding: '$navItemPaddingY $navItemPaddingX',
  fontWeight: '$bold',
})

export default Item
