import NextLink from 'next/link'

import OutboundIcon from '@src/icons/OutboundIcon'
import isOutboundUrl from '@src/lib/isOutboundUrl'
import { styled } from '@src/stitches.config'

const Link = ({ children, href, className, ...props }: any): JSX.Element => {
  const isOutbound = isOutboundUrl(href)

  return (
    <NextLink href={href} {...props}>
      <a target={isOutbound ? '_blank' : undefined} className={className}>
        {children}
        {isOutbound ? <Icon /> : null}
      </a>
    </NextLink>
  )
}

const Icon = styled(OutboundIcon, {
  width: 14,
  height: 14,
  marginLeft: 2,
})

export default Link