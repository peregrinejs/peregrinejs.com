import React from 'react'

import type { LinkProps as BaseLinkProps } from '@src/components/Link'
import BaseLink from '@src/components/Link'
import useLink from '@src/lib/docs/useLink'

export type LinkProps = BaseLinkProps

const Link = ({ href: hrefProp, ...props }: LinkProps): JSX.Element => {
  const { href } = useLink(hrefProp)

  return <BaseLink {...props} href={href} />
}

export default Link
