import React from 'react'

import _InfoIcon from '@src/icons/InfoIcon'
import _WarningIcon from '@src/icons/WarningIcon'
import { styled } from '@src/stitches.config'

import Box from './Box'

export interface CalloutProps {
  title?: string
  type?: 'info' | 'warning' | 'construction'
  children: React.ReactNode
}

const Callout = ({
  title,
  type = 'info',
  children,
}: CalloutProps): JSX.Element => {
  const typeVariant = type === 'construction' ? 'warning' : type

  return (
    <Root type={typeVariant}>
      <IconBox>
        {type === 'info' ? (
          <InfoIcon />
        ) : type === 'warning' ? (
          <WarningIcon />
        ) : type === 'construction' ? (
          '🚧'
        ) : null}
      </IconBox>
      <Content>
        {title ? <Title>{title}</Title> : null}
        {children}
      </Content>
    </Root>
  )
}

const Root = styled(Box, {
  'display': 'flex',
  'gap': '0.75em',
  'margin': '1em 0',
  'padding': '1em',

  '& a': {
    color: 'rgb($gray1)',
  },

  '& h1, h2, h3, h4, h5, h6': {
    color: 'inherit',
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

const IconBox = styled(Box, {
  $$size: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$$size',
  height: '$$size',
  fontSize: 'calc($$size * 0.65)',
  userSelect: 'none',
})

const Content = styled(Box, {
  'display': 'flex',
  'flexDirection': 'column',
  'justifyContent': 'center',

  '& > *:first-child': {
    marginTop: 0,
  },

  '& > *:last-child': {
    marginBottom: 0,
  },
})

const Title = styled('h5', {
  margin: 0,
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
