import React from 'react'

import _InfoIcon from '@src/icons/InfoIcon'
import _WarningIcon from '@src/icons/WarningIcon'
import { styled } from '@src/stitches.config'

import Box from './Box'

export interface CalloutProps {
  type?: 'info'
  children: React.ReactNode
}

const Callout = ({ type = 'info', children }: CalloutProps): JSX.Element => {
  return (
    <Root type={type}>
      <Box css={{ height: 32 }}>
        {type === 'info' ? (
          <InfoIcon />
        ) : type === 'warning' ? (
          <WarningIcon />
        ) : null}
      </Box>
      {children}
    </Root>
  )
}

const Root = styled(Box, {
  'display': 'flex',
  'gap': '0.75em',
  'margin': '1em 0',
  'padding': '1em',

  '& > *': {
    margin: 0,
  },

  '& a': {
    color: 'rgb($gray1)',
  },

  'variants': {
    type: {
      info: {
        color: 'rgb($info)',
        backgroundColor: 'rgba($info / 0.25)',
      },
      warning: {
        color: 'rgb($warning)',
        backgroundColor: 'rgba($warning / 0.25)',
      },
    },
  },
})

const InfoIcon = styled(_InfoIcon, {
  width: 32,
  height: 32,
})

const WarningIcon = styled(_WarningIcon, {
  width: 32,
  height: 32,
})

export default Callout
