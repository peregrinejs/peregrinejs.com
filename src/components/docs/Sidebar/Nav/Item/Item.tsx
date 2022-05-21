import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import Link from '@src/components/Link'
import _Text from '@src/components/Text'
import _Circle from '@src/icons/Circle'
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
          <Anchor css={{ color: current ? '$gray1' : undefined }}>
            <Text>
              {children}
              {current ? <Circle css={{ $$size: '6px' }} /> : null}
            </Text>
          </Anchor>
        </NextLink>
      )}
    </Root>
  )
}

const Root = styled('li', {
  userSelect: 'none',
})

const Text = styled(_Text, {
  position: 'relative',
})

const Circle = styled(_Circle, {
  position: 'absolute',
  top: 'calc(50% - $$size / 2 + 1px)',
  right: 'calc(-$$size - 0.25em)',
  width: '$$size',
  height: '$$size',
  color: '$gray1',
})

export default Item
