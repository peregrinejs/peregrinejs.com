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
  const { href, isOutbound } = useLink(hrefProp)

  return (
    <NextLink {...props} href={href} target={isOutbound ? '_blank' : undefined}>
      {children}
      {isOutbound ? <Icon /> : null}
    </NextLink>
  )
}

const Icon = styled(OutboundIcon, {
  width: 14,
  height: 14,
  margin: '2px 0 2px 2px',
  verticalAlign: 'text-bottom',
})

export default Link
