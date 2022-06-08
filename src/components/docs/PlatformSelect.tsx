import type { CSS } from '@stitches/react'
import Link from 'next/link'

import Box from '@src/components/Box'
import IconButton from '@src/components/IconButton'
import AndroidIcon from '@src/icons/AndroidIcon'
import AppleIcon from '@src/icons/AppleIcon'
import useLink from '@src/lib/docs/useLink'
import { styled } from '@src/stitches.config'
import useRoute from '@src/lib/docs/useRoute'

export interface PlatformSelectProps {
  css?: CSS
}

const PlatformSelect = ({ css }: PlatformSelectProps): JSX.Element => {
  const { page, platform } = useRoute() ?? { page: '/', platform: 'ios' }
  const { href: androidHref } = useLink(page, { platform: 'android' })
  const { href: iosHref } = useLink(page, { platform: 'ios' })

  return (
    <Root css={css}>
      <Link href={iosHref} passHref>
        <IconButton
          active={platform === 'ios'}
          css={{
            '$$color-active': '$colors$brandapple',
            '$$size': '26px',
            '@lg': { $$size: '32px' },
          }}
          icon={AppleIcon}
        />
      </Link>
      <Link href={androidHref} passHref>
        <IconButton
          active={platform === 'android'}
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
