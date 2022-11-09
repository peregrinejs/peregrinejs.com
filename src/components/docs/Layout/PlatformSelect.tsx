import type { CSS } from '@stitches/react'
import Link from 'next/link'

import Box from '@src/components/Box'
import _AndroidIcon from '@src/icons/AndroidIcon'
import _AppleIcon from '@src/icons/AppleIcon'
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

  const sizes = {
    sm: 18,
    md: 22,
    lg: 26,
  }

  const buttonCSS = {
    '$$size': `${sizes.sm}px`,
    '@md': { $$size: `${sizes.md}px` },
    '@lg': { $$size: `${sizes.lg}px` },
  }

  return (
    <Root css={css}>
      <Link href={iosHref} scroll={false}>
        <PlatformButton active={platform === 'ios'} css={buttonCSS}>
          <AppleIcon />
        </PlatformButton>
      </Link>
      <Link href={androidHref} scroll={false}>
        <PlatformButton active={platform === 'android'} css={buttonCSS}>
          <AndroidIcon />
        </PlatformButton>
      </Link>
    </Root>
  )
}

const Root = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.35em',
})

const PlatformButton = styled(Box, {
  'cursor': 'pointer',
  'width': 'calc($$size * 1.5)',
  'height': 'calc($$size * 1.5)',
  'display': 'flex',
  'boxShadow': '0 0 0 1.5px #4b4b4b',
  'borderRadius': '$$size',
  'alignItems': 'center',
  'justifyContent': 'center',
  'color': 'rgb($gray3)',

  '&:hover': {
    backgroundColor: 'rgb($gray4)',
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

const AppleIcon = styled(_AppleIcon, {
  width: '$$size',
  height: '$$size',
  marginBottom: '2px',
})

const AndroidIcon = styled(_AndroidIcon, {
  width: '$$size',
  height: '$$size',
  marginBottom: '2px',
})

export default PlatformSelect
