import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import isOutboundUrl from '@src/lib/isOutboundUrl'
import { styled } from '@src/stitches.config'

import Anchor from './Anchor'
import OutboundIcon from '@src/icons/OutboundIcon'

export interface ItemProps {
  href: string
  children: React.ReactNode
}

const Item = ({ href, children }: ItemProps): JSX.Element => {
  const { pathname } = useRouter()
  const isOutbound = isOutboundUrl(href)
  const current = pathname === href

  return (
    <Root>
      {isOutbound ? (
        <NextLink href={href}>
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
