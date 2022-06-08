import type { CSS } from '@stitches/react'
import React from 'react'

import { styled } from '@src/stitches.config'

import ButtonBase from './ButtonBase'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  css?: CSS
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return <Root {...props}>{children}</Root>
}

const Root = styled(ButtonBase, {
  'backgroundColor': 'rgb($gray4)',
  'color': 'rgb($gray1)',
  'padding': '0.35em 0.75em',
  'fontSize': '$md',
  'fontWeight': '$bold',

  '&::before': {
    position: 'absolute',
    content: '""',
    bottom: 0,
    left: 0,
    opacity: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgb($gray1)',
  },

  '&:is(:hover, :focus)::before': {
    opacity: 0.1,
  },
})

export default Button
