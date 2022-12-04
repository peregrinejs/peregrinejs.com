import type { CSS } from '@stitches/react'
import React, { forwardRef } from 'react'

import { styled } from '@src/stitches.config'

import InputBase from './InputBase'

export interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  css?: CSS
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, ...props }, ref): JSX.Element => (
    <Root ref={ref} {...props}>
      {children}
    </Root>
  ),
)

const Root = styled(InputBase, {
  '$$boxShadowSize': '$sizes$controlBorder',
  '$$boxShadowColor': 'rgb($colors$gray3)',

  'backgroundColor': 'rgb($gray4)',
  'color': 'rgb($gray1)',
  'height': '$controlHeight',
  'lineHeight': '$control',
  'fontSize': '$sm',
  'padding': '$controlPadding',

  '&:focus, &[aria-invalid=true]': {
    boxShadow: 'inset 0 0 0 $$boxShadowSize $$boxShadowColor',
  },

  '@lg': {
    $$boxShadowSize: '$sizes$controlBorderLg',
  },

  '&[aria-invalid=true]': {
    $$boxShadowColor: 'rgba($colors$red / 0.75)',
  },
})

Input.displayName = 'Input'

export default Input
