import type { CSS } from '@stitches/react'
import React, { forwardRef } from 'react'

import { styled } from '@src/stitches.config'

import ButtonBase from './ButtonBase'

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref' | 'type'> {
  type?: 'button' | 'submit' | 'reset'
  css?: CSS
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref): JSX.Element => (
    <Root ref={ref} {...props}>
      {children}
    </Root>
  ),
)

const Root = styled(ButtonBase, {
  'position': 'relative',
  'backgroundColor': 'rgb($gray4)',
  'color': 'rgb($gray1)',
  'height': '$controlHeight',
  'lineHeight': '$control',
  'padding': '$controlPadding',
  'fontSize': '$md',
  'fontWeight': '$bold',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb($gray1)',
    opacity: 0,
    transition: 'opacity 0.2s ease',
  },

  '&:hover, &:focus': {
    'outline': 'none',

    '&::before': {
      opacity: 0.1,
    },
  },

  '&[aria-disabled=true]': {
    'pointerEvents': 'none',
    'cursor': 'not-allowed',
    'backgroundColor': 'rgb($gray5)',
    'color': 'rgb($gray3)',

    '&::before': {
      opacity: 0,
    },
  },
})

Button.displayName = 'Button'

export default Button
