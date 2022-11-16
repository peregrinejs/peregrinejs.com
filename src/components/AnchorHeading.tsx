import React from 'react'

import { styled } from '@src/stitches.config'

import AnchorHeadingLink from './AnchorHeadingLink'

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
  id,
  ...props
}: AnchorHeadingProps): JSX.Element => {
  return (
    <>
      <Anchor
        id={id}
        css={{
          top: typeof anchorOffset === 'number' ? -anchorOffset : undefined,
        }}
      />
      <AnchorHeadingLink {...props} href={`#${id}`}>
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

export const H1 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h1" />

export const H2 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h2" />

export const H3 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h3" />

export const H4 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h4" />

export const H5 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h5" />

export const H6 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h6" />

export default AnchorHeading
