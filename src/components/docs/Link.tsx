import NextLink from 'next/link'
import React from 'react'

import OutboundIcon from '@src/icons/OutboundIcon'
import useLink from '@src/lib/docs/useLink'
import { styled } from '@src/stitches.config'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
}

const Link = ({
  children,
  href: hrefProp,
  ...props
}: LinkProps): JSX.Element => {
  const { href, as, isOutbound } = useLink(hrefProp)

  return (
    <NextLink href={href} as={as} {...props} passHref>
      <A target={isOutbound ? '_blank' : undefined}>
        {children}
        {isOutbound ? <Icon /> : null}
      </A>
    </NextLink>
  )
}

const A = styled('a', {
  whiteSpace: 'nowrap',
})

const Icon = styled(OutboundIcon, {
  width: 14,
  height: 14,
  marginLeft: 2,
})

export default Link
