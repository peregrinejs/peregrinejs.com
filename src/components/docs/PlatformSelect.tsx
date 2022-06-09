import type { CSS } from '@stitches/react'
import Link from 'next/link'

import Box from '@src/components/Box'
import IconButton from '@src/components/IconButton'
import AndroidIcon from '@src/icons/AndroidIcon'
import AppleIcon from '@src/icons/AppleIcon'
import useLink from '@src/lib/docs/useLink'
import useRoute from '@src/lib/docs/useRoute'
import { styled } from '@src/stitches.config'

export interface PlatformSelectProps {
  css?: CSS
}

const PlatformSelect = ({ css }: PlatformSelectProps): JSX.Element => {
  const { page, platform } = useRoute() ?? { page: '/', platform: 'ios' }
  const { href: androidHref } = useLink(page, { platform: 'android' })
  const { href: iosHref } = useLink(page, { platform: 'ios' })

  const buttonCSS = {
    '$$size': '26px',
    '@md': { $$size: '32px' },
    '@lg': { $$size: '42px' },
  }

  return (
    <Root css={css}>
      <Link href={iosHref} passHref>
        <IconButton
          active={platform === 'ios'}
          css={{
            ...buttonCSS,
            '$$color-active': '$colors$brandapple',
          }}
          icon={AppleIcon}
        />
      </Link>
      <Link href={androidHref} passHref>
        <IconButton
          active={platform === 'android'}
          css={{
            ...buttonCSS,
            '$$color-active': '$colors$brandandroid',
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
