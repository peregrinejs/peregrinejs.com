import React from 'react'

import { styled } from '@src/stitches.config'

import Code from './Code'

export type PreProps = React.HTMLAttributes<HTMLPreElement>

const Pre = ({ children, ...props }: PreProps): JSX.Element => {
  const child = React.Children.map(children, (child, index) => {
    if (index !== 0 || !React.isValidElement(child)) {
      throw new Error('Pre only accepts one Code or code child')
    }

    if (child.type !== 'code') {
      return child
    }

    return <Code {...child.props} />
  })

  return <Root {...props}>{child}</Root>
}

const Root = styled('pre', {
  backgroundColor: 'rgb($gray4)',
  overflow: 'scroll',
  fontSize: '$xsm',
  lineHeight: '1.25em',
  padding: '1em',
})

export default Pre
