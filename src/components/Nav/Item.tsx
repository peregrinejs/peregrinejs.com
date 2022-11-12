import { useAtom } from 'jotai'
import React from 'react'

import bpAtom from '@src/atoms/bpAtom'
import Link from '@src/components/Link'
import _Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

export interface ItemProps {
  href: string
  children: React.ReactNode
}

const Item = ({ href, children }: ItemProps): JSX.Element => {
  const [bp] = useAtom(bpAtom)

  return (
    <Link
      href={href}
      css={{
        $$iconSize: bp === 'lg' ? '18px' : '16px',
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
