import type { CSS } from '@stitches/react'
import React from 'react'

import { styled } from '@src/stitches.config'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  css?: CSS
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return <Component {...props}>{children}</Component>
}

const Component = styled('button', {
  'display': 'inline-block',
  'position': 'relative',
  'backgroundColor': 'rgb($gray4)',
  'color': 'rgb($gray1)',
  'border': 'none',
  'padding': '0.35em 0.75em',
  'cursor': 'pointer',
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
    transition: 'opacity 200ms ease-in-out',
  },

  '&:is(:hover, :focus)::before': {
    opacity: 0.1,
  },
})

export default Button
