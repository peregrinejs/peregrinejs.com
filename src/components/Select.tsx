import type { CSS } from '@stitches/react'
import React from 'react'

import { styled } from '@src/stitches.config'

import SelectBase from './SelectBase'

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  css?: CSS
}

const Select = ({ children, ...props }: SelectProps): JSX.Element => {
  return <Root {...props}>{children}</Root>
}

const Root = styled(SelectBase, {
  'backgroundColor': 'rgb($gray4)',
  'color': 'rgb($gray1)',
  'padding': '0.35em 0.75em',
  'fontSize': '$md',

  '&::before': {
    position: 'absolute',
    content: '""',
    bottom: 0,
    left: 0,
    opacity: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgb($gray1)',
    transition: 'opacity 200ms ease-in-out',
  },

  '&:is(:hover, :focus)::before': {
    opacity: 0.1,
  },
})

export default Select
