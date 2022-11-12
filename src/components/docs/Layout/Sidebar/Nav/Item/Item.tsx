import React from 'react'

import Link from '@src/components/Link'
import _Text from '@src/components/Text'
import useLink from '@src/lib/docs/useLink'
import useRoute from '@src/lib/docs/useRoute'
import { styled } from '@src/stitches.config'

export interface ItemProps {
  href: string
  children: React.ReactNode
}

const Item = ({ href: hrefProp, children }: ItemProps): JSX.Element => {
  const route = useRoute()
  const { href } = useLink(hrefProp)
  const current = route?.path === href

  return (
    <Root current={current}>
      <Link href={href} aria-current={current}>
        {children}
      </Link>
    </Root>
  )
}

const Root = styled('li', {
  'userSelect': 'none',

  '& a': {
    'display': 'block',
    'lineHeight': '$navItem',
    'padding': '0 $headerPadding',
    'textDecoration': 'none',
    'color': 'rgb($gray2)',

    '@md': {
      fontSize: '$sm',
    },

    '&:hover': {
      color: 'rgb($accent1)',
    },
  },

  'variants': {
    current: {
      true: {
        '& a': {
          color: 'rgb($accent1)',
          backgroundColor: 'rgba($accent1 / 29%)',
          fontWeight: '$bold',
        },
      },
    },
  },
})

export default Item
