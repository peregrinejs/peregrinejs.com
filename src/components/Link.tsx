import NextLink from 'next/link'

import OutboundIcon from '@src/icons/OutboundIcon'
import isOutboundUrl from '@src/lib/isOutboundUrl'
import { styled } from '@src/stitches.config'

const Link = ({ children, href, ...props }: any): JSX.Element => {
  const isOutbound = isOutboundUrl(href)

  return (
    <NextLink href={href} {...props} passHref>
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
