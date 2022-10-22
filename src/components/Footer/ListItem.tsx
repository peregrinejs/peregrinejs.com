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
      <Link href={href} passHref>
        <A>
          <Text>{children}</Text>
        </A>
      </Link>
    </li>
  )
}

const A = styled('a', {
  display: 'block',
})

const Text = styled(_Text, {
  color: 'rgb($gray2)',
})

export default ListItem
