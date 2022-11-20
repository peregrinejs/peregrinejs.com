import React from 'react'

import Link from '@src/components/Link'
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
  color: 'rgb($gray2)',
})

export default ListItem
