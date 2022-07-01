import { styled } from '@src/stitches.config'
import kebabCase from 'lodash/fp/kebabCase'
import React from 'react'

import AnchorHeadingLink from './AnchorHeadingLink'

export const createSlug = kebabCase

export interface AnchorHeadingProps
  extends React.HTMLAttributes<HTMLAnchorElement & HTMLHeadingElement> {
  Component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  icon?: boolean
  anchorOffset?: number
}

const AnchorHeading = ({
  Component,
  anchorOffset,
  children,
  ...props
}: AnchorHeadingProps): JSX.Element => {
  if (typeof children !== 'string') {
    throw new Error('Headings must only contain text.')
  }

  const slug = createSlug(children)

  return (
    <>
      <Anchor
        id={slug}
        css={{
          top: typeof anchorOffset === 'number' ? -anchorOffset : undefined,
        }}
      />
      <AnchorHeadingLink {...props} href={`#${slug}`}>
        <Component>{children}</Component>
      </AnchorHeadingLink>
    </>
  )
}

const Anchor = styled('a', {
  display: 'block',
  position: 'relative',
  visibility: 'hidden',
})

export const H1 = (props: Omit<AnchorHeadingProps, 'Component'>) => (
  <AnchorHeading {...props} Component="h1" />
)

export const H2 = (props: Omit<AnchorHeadingProps, 'Component'>) => (
  <AnchorHeading {...props} Component="h2" />
)

export const H3 = (props: Omit<AnchorHeadingProps, 'Component'>) => (
  <AnchorHeading {...props} Component="h3" />
)

export const H4 = (props: Omit<AnchorHeadingProps, 'Component'>) => (
  <AnchorHeading {...props} Component="h4" />
)

export const H5 = (props: Omit<AnchorHeadingProps, 'Component'>) => (
  <AnchorHeading {...props} Component="h5" />
)

export const H6 = (props: Omit<AnchorHeadingProps, 'Component'>) => (
  <AnchorHeading {...props} Component="h6" />
)

export default AnchorHeading
