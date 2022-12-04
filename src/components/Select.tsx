import type { CSS } from '@stitches/react'
import React from 'react'

import { styled } from '@src/stitches.config'

import SelectBase from './SelectBase'

export interface SelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, 'ref'> {
  css?: CSS
}

const Select = ({ children, ...props }: SelectProps): JSX.Element => {
  return <Root {...props}>{children}</Root>
}

const Root = styled(SelectBase, {
  backgroundColor: 'rgb($gray4)',
  color: 'rgb($gray1)',
  height: '$controlHeight',
  lineHeight: '$control',
  padding: '$controlPadding',
  fontSize: '$md',
})

export default Select
