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
  const [focused, setFocused] = useState(false)

  const child = React.Children.map(children, (child, index) => {
    if (index !== 0 || !React.isValidElement(child)) {
      throw new Error(
        'AnchorHeadingLink must only have one child heading element.',
      )
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const heading = child.props.children

    return React.cloneElement(
      child,
      {},
      <>
        {icon ? (
          <Icon
            aria-hidden
            css={focused || hovered ? {} : { display: 'none' }}
          />
        ) : null}
        {heading}
      </>,
    )
  })

  return (
    <A
      {...props}
      href={href}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Text>{child}</Text>
    </A>
  )
}

AnchorHeadingLink.displayName = 'AnchorHeadingLink'

const A = styled(Link, {
  display: 'block',
})

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
