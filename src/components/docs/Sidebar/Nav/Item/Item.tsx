import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import OutboundIcon from '@src/icons/OutboundIcon'
import useLink from '@src/lib/docs/useLink'
import { styled } from '@src/stitches.config'

import Anchor from './Anchor'

export interface ItemProps {
  href: string
  children: React.ReactNode
}

const Item = ({ href: hrefProp, children }: ItemProps): JSX.Element => {
  const { pathname } = useRouter()
  const { href, as, isOutbound } = useLink(hrefProp)
  const current = pathname === href

  return (
    <Root>
      {isOutbound ? (
        <NextLink href={href} as={as} passHref>
          <Anchor target="_blank">
            {children}
            <Icon />
          </Anchor>
        </NextLink>
      ) : (
        <NextLink href={href} as={as} passHref>
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
