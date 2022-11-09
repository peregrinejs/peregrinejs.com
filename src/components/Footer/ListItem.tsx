import Link from 'next/link'
import React from 'react'

import _Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

export interface ListItemProps {
  href: string
  children: React.ReactNode
}

const ListItem = ({ href, children }: ListItemProps): JSX.Element => {
  return (
    <li>
      <Link href={href}>
        <Text>{children}</Text>
      </Link>
    </li>
  )
}

const Text = styled(_Text, {
  display: 'block',
  color: 'rgb($gray2)',
})

export default ListItem
