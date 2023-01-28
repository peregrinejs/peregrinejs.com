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

const IconBox = styled(Box, {
  '$$size': '32px',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'margin': '0.75rem 0',
  'width': '$$size',
  'height': '$$size',
  'fontSize': 'calc($$size * 0.65)',
  'userSelect': 'none',

  '@md': {
    $$size: '36px',
  },

  '@lg': {
    $$size: '48px',
  },
})

const Root = styled(Box, {
  'display': 'flex',
  'gap': '0.75rem',
  'margin': '1rem 0',
  'padding': '0 1rem',

  '& a': {
    color: 'rgb($gray1)',
  },

  '& h1, h2, h3, h4, h5, h6, strong': {
    color: 'inherit',
  },

  'variants': {
    type: {
      info: {
        color: 'rgba($info / 0.9)',
        backgroundColor: 'rgba($info / 0.1)',

        [`& :is(h1, h2, h3, h4, h5, h6, strong, ${IconBox.toString()})`]: {
          color: 'rgba($info)',
        },
      },
      warning: {
        color: 'rgba($warning / 0.8)',
        backgroundColor: 'rgba($warning / 0.125)',

        [`& :is(h1, h2, h3, h4, h5, h6, strong, ${IconBox.toString()})`]: {
          color: 'rgba($warning)',
        },
      },
    },
  },
})

const Content = styled(Box, {
  flex: 1,
})

const Title = styled('h4')

const InfoIcon = styled(_InfoIcon, {
  width: 32,
  height: 32,
})

const WarningIcon = styled(_WarningIcon, {
  width: 32,
  height: 32,
})

export default Callout
