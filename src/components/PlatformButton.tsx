import type { CSS } from '@stitches/react'
import React from 'react'

import _AndroidIcon from '@src/icons/AndroidIcon'
import _AppleIcon from '@src/icons/AppleIcon'
import { styled } from '@src/stitches.config'

import ButtonBase from './ButtonBase'

const _PlatformButton = styled(ButtonBase, {
  '$$size': '18px',

  'cursor': 'pointer',
  'width': 'calc($$size * 1.5)',
  'height': 'calc($$size * 1.5)',
  'display': 'flex',
  'boxShadow': '0 0 0 1.5px #4b4b4b',
  'borderRadius': '$$size',
  'alignItems': 'center',
  'justifyContent': 'center',
  'color': 'rgb($gray3)',

  '&:hover, &:focus': {
    backgroundColor: 'rgb($gray4)',
  },

  '&:focus-visible': {
    outline: '2px solid rgb($accent2)',
  },

  'variants': {
    active: {
      true: {
        color: 'rgb($gray1)',
        backgroundColor: 'rgb($gray4)',
      },
    },
  },
})

export interface PlatformButtonProps {
  active?: boolean
  css?: CSS
  onClick?: (event: React.MouseEvent) => void
}

const Apple = (props: PlatformButtonProps): JSX.Element => (
  <_PlatformButton {...props}>
    <AppleIcon />
  </_PlatformButton>
)

const Android = (props: PlatformButtonProps): JSX.Element => (
  <_PlatformButton {...props}>
    <AndroidIcon />
  </_PlatformButton>
)

const AppleIcon = styled(_AppleIcon, {
  width: '$$size',
  height: '$$size',
  verticalAlign: 'middle',
})

const AndroidIcon = styled(_AndroidIcon, {
  width: '$$size',
  height: '$$size',
  verticalAlign: 'middle',
})

const PlatformButton = {
  Apple,
  Android,
}

export default PlatformButton
