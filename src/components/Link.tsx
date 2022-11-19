import type { CSS } from '@stitches/react'
import NextLink from 'next/link'
import React from 'react'

import OutboundIcon from '@src/icons/OutboundIcon'
import isOutboundUrl from '@src/lib/isOutboundUrl'
import { styled } from '@src/stitches.config'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  // FIXME: This CSS is applied directly to the icon, not the link because
  // Next.js links aren't Stitches components.
  css?: CSS
}

const Link = ({ children, href, css, ...props }: LinkProps): JSX.Element => {
  const isOutbound = isOutboundUrl(href)

  return (
    <NextLink {...props} href={href} target={isOutbound ? '_blank' : undefined}>
      {children}
      {isOutbound ? <Icon css={css} /> : null}
    </NextLink>
  )
}

const Icon = styled(OutboundIcon, {
  '$$iconSize': '14px',
  '$$iconMarginTop': '2px',
  '$$iconMarginBottom': '2px',
  '$$iconMarginLeft': '2px',
  '$$iconMarginRight': '0',

  'width': '$$iconSize',
  'height': '$$iconSize',
  'marginTop': '$$iconMarginTop',
  'marginBottom': '$$iconMarginBottom',
  'marginLeft': '$$iconMarginLeft',
  'marginRight': '$$iconMarginRight',
  'verticalAlign': 'text-bottom',

  '@lg': {
    $$iconSize: '16px',
  },
})

export default Link
