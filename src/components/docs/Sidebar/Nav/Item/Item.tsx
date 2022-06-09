import NextLink from 'next/link'
import React from 'react'

import OutboundIcon from '@src/icons/OutboundIcon'
import useLink from '@src/lib/docs/useLink'
import useRoute from '@src/lib/docs/useRoute'
import { styled } from '@src/stitches.config'

import Anchor from './Anchor'

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
        <NextLink href={href} passHref>
          <Anchor target="_blank">
            {children}
            <Icon />
          </Anchor>
        </NextLink>
      ) : (
        <NextLink href={href} passHref>
          <Anchor current={current} aria-current={current}>
            {children}
          </Anchor>
        </NextLink>
      )}
    </Root>
  )
}

const Root = styled('li', {
  userSelect: 'none',
})

const Icon = styled(OutboundIcon, {
  width: 14,
  height: 14,
  marginLeft: 2,
})

export default Item
