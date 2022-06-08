import Link from 'next/link'
import React, { useState } from 'react'

import LinkIcon from '@src/icons/LinkIcon'
import trimLeadingHashes from '@src/lib/trimLeadingHashes'
import { styled } from '@src/stitches.config'

export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const Anchor = ({ href, children, ...props }: AnchorProps): JSX.Element => {
  const [hovered, setHovered] = useState(false)

  const child = React.Children.map(children, (child, index) => {
    if (
      index !== 0 ||
      !React.isValidElement(child) ||
      typeof child.type !== 'string'
    ) {
      throw new Error('Anchor must only have one child heading element.')
    }

    return React.cloneElement(
      child,
      {
        id: trimLeadingHashes(href),
        style: { position: 'relative' },
      },
      <>
        <Icon aria-hidden css={hovered ? {} : { display: 'none' }} />
        {child.props.children}
      </>,
    )
  })

  return (
    <Link href={href} passHref>
      <A
        {...props}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {child}
      </A>
    </Link>
  )
}

Anchor.displayName = 'Anchor'

const A = styled('a', {
  display: 'block',
  marginLeft: '-$docsX',
  paddingLeft: '$docsX',
})

const Icon = styled(LinkIcon, {
  $$size: '0.75em',
  position: 'absolute',
  left: 'calc(-$$size - 0.1em)',
  top: 'calc(50% - $$size / 2)',
  width: '$$size',
  height: '$$size',
  color: 'rgb($gray3)',
})

export default Anchor
