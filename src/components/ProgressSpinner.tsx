import type { CSS } from '@stitches/react'

import { styled, keyframes } from '@src/stitches.config'

export interface ProgressSpinnerProps {
  css?: CSS
}

const ProgressSpinner = ({ css }: ProgressSpinnerProps): JSX.Element => {
  return (
    <Root viewBox="0 0 100 100" css={{ $$size: '32px', ...css }}>
      <Spinner cx="50" cy="50" r="40" fill="none" strokeWidth="10"></Spinner>
    </Root>
  )
}

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const dash = keyframes({
  '0%': {
    strokeDasharray: '1 300',
    strokeDashoffset: '0',
  },
  '50%': {
    strokeDasharray: '180 300',
    strokeDashoffset: '-70',
  },
  '100%': {
    strokeDasharray: '180 300',
    strokeDashoffset: '-248',
  },
})

const Root = styled('svg', {
  animation: `${rotate.toString()} 2s linear infinite`,
  width: '$$size',
  height: '$$size',
})

const Spinner = styled('circle', {
  stroke: 'currentColor',
  strokeLinecap: 'round',
  animation: `${dash.toString()} 1.5s ease-in-out infinite`,
})

export default ProgressSpinner
