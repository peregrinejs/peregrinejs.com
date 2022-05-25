import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import Link from '@src/components/Link'
import isOutboundUrl from '@src/lib/isOutboundUrl'
import { styled } from '@src/stitches.config'

import Anchor from './Anchor'

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
        <Link href={href} className={Anchor.className}>
          {children}
        </Link>
      ) : (
        <NextLink href={href} passHref>
          <Anchor current={current}>{children}</Anchor>
        </NextLink>
      )}
    </Root>
  )
}

const Root = styled('li', {
  userSelect: 'none',
})

export default Item
