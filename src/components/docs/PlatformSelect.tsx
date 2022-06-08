import type { CSS } from '@stitches/react'
import Link from 'next/link'

import Box from '@src/components/Box'
import IconButton from '@src/components/IconButton'
import AndroidIcon from '@src/icons/AndroidIcon'
import AppleIcon from '@src/icons/AppleIcon'
import useLink from '@src/lib/docs/useLink'
import usePlatform from '@src/lib/docs/usePlatform'
import usePathComponents from '@src/lib/usePathComponents'
import { styled } from '@src/stitches.config'

export interface PlatformSelectProps {
  css?: CSS
}

const PlatformSelect = ({ css }: PlatformSelectProps): JSX.Element => {
  const currentPlatform = usePlatform()
  const [, ...pathComponents] = usePathComponents()
  const path = pathComponents.join('/')

  const { href: androidHref, as: androidAs } = useLink(path, {
    platform: 'android',
  })

  const { href: iosHref, as: iosAs } = useLink(path, {
    platform: 'ios',
  })

  return (
    <Root css={css}>
      <Link href={iosHref} as={iosAs} passHref>
        <IconButton
          active={currentPlatform === 'ios'}
          css={{
            '$$color-active': '$colors$brandapple',
            '$$size': '26px',
            '@lg': { $$size: '32px' },
          }}
          icon={AppleIcon}
        />
      </Link>
      <Link href={androidHref} as={androidAs} passHref>
        <IconButton
          active={currentPlatform === 'android'}
          css={{
            '$$color-active': '$colors$brandandroid',
            '$$size': '26px',
            '@lg': { $$size: '32px' },
          }}
          icon={AndroidIcon}
        />
      </Link>
    </Root>
  )
}

const Root = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25em',
})

export default PlatformSelect
