import Link from 'next/link'
import React, { useState } from 'react'

import LinkIcon from '@src/icons/LinkIcon'
import { styled } from '@src/stitches.config'

import _Text from './Text'

export interface AnchorHeadingLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  icon?: boolean
}

const AnchorHeadingLink = ({
  href,
  children,
  icon = true,
  ...props
}: AnchorHeadingLinkProps): JSX.Element => {
  const [hovered, setHovered] = useState(false)

  const child = React.Children.map(children, (child, index) => {
    if (
      index !== 0 ||
      !React.isValidElement(child) ||
      typeof child.type !== 'string'
    ) {
      throw new Error(
        'AnchorHeadingLink must only have one child heading element.',
      )
    }

    return React.cloneElement(
      child,
      {},
      <>
        {icon ? (
          <Icon aria-hidden css={hovered ? {} : { display: 'none' }} />
        ) : null}
        {child.props.children}
      </>,
    )
  })

  return (
    <Link
      {...props}
      href={href}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Text>{child}</Text>
    </Link>
  )
}

AnchorHeadingLink.displayName = 'AnchorHeadingLink'

const Text = styled(_Text, {
  display: 'block',
  marginLeft: '-$docsX',
  paddingLeft: '$docsX',
})

const Icon = styled(LinkIcon, {
  $$size: '0.75em',
  $$padding: '0.1em',
  marginLeft: 'calc(-$$size - $$padding)',
  marginRight: '$$padding',
  width: '$$size',
  height: '$$size',
  color: 'rgb($gray3)',
})

export default AnchorHeadingLink
