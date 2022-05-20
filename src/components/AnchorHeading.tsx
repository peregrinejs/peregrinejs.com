import kebabCase from 'lodash/fp/kebabCase'
import React from 'react'

import Anchor from './Anchor'

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>

const createHeading = (Heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
  const Component = ({ children }: HeadingProps): JSX.Element => {
    if (typeof children !== 'string') {
      throw new Error('Headings must only contain text.')
    }

    return (
      <Anchor href={`#${kebabCase(children)}`}>
        <Heading>{children}</Heading>
      </Anchor>
    )
  }

  return Component
}

export default {
  H1: createHeading('h1'),
  H2: createHeading('h2'),
  H3: createHeading('h3'),
  H4: createHeading('h4'),
  H5: createHeading('h5'),
  H6: createHeading('h6'),
}
