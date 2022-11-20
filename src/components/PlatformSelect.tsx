import type { CSS } from '@stitches/react'

import type Platform from '@src/Platform'
import Box from '@src/components/Box'
import PlatformButton from '@src/components/PlatformButton'
import { styled } from '@src/stitches.config'

export interface PlatformSelectProps {
  selectedPlatform?: Platform
  onPlatformSelect?: (platform: Platform) => void
  css?: CSS
}

const PlatformSelect = ({
  selectedPlatform,
  onPlatformSelect,
  css,
}: PlatformSelectProps): JSX.Element => {
  const createClickHandler = (platform: Platform) => () => {
    onPlatformSelect?.(platform)
  }

  return (
    <Root css={css}>
      <PlatformButton.Apple
        active={selectedPlatform === 'ios'}
        css={css}
        onClick={createClickHandler('ios')}
      />
      <PlatformButton.Android
        active={selectedPlatform === 'android'}
        css={css}
        onClick={createClickHandler('android')}
      />
    </Root>
  )
}

const Root = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.35em',
})

export default PlatformSelect
