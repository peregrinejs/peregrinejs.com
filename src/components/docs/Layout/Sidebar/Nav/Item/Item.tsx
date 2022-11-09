import Link from 'next/link'
import React from 'react'

import _Text from '@src/components/Text'
import OutboundIcon from '@src/icons/OutboundIcon'
import useLink from '@src/lib/docs/useLink'
import useRoute from '@src/lib/docs/useRoute'
import { styled } from '@src/stitches.config'

export interface ItemProps {
  href: string
  children: React.ReactNode
}

const Item = ({ href: hrefProp, children }: ItemProps): JSX.Element => {
  const route = useRoute()
  const { href, isOutbound } = useLink(hrefProp)
  const current = route?.path === href

  return (
    <Root>
      {isOutbound ? (
        <Link href={href} target="_blank">
          <Text>
            {children}
            <Icon />
          </Text>
        </Link>
      ) : (
        <Link href={href} target="_blank" aria-current={current}>
          <Text current={current}>{children}</Text>
        </Link>
      )}
    </Root>
  )
}

const Root = styled('li', {
  userSelect: 'none',
})

const Text = styled(_Text, {
  'display': 'block',
  'cursor': 'pointer',
  'padding': '0 $headerPadding',
  'lineHeight': '$navItem',
  'color': 'rgb($gray2)',

  '&:hover': {
    color: 'rgb($accent1)',
    textDecoration: 'none',
  },

  '@md': {
    fontSize: '$sm',
  },

  'variants': {
    current: {
      true: {
        color: 'rgb($accent1)',
        backgroundColor: 'rgba($accent1 / 29%)',
        fontWeight: '$bold',
      },
    },
  },
})

const Icon = styled(OutboundIcon, {
  width: 14,
  height: 14,
  marginLeft: 2,
})

export default Item
