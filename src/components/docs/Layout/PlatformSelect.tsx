import type { CSS } from '@stitches/react'
import { useRouter } from 'next/router'

import Box from '@src/components/Box'
import ControlledPlatformSelect from '@src/components/PlatformSelect'
import useLink from '@src/lib/docs/useLink'
import useRoute from '@src/lib/docs/useRoute'
import { styled } from '@src/stitches.config'

export interface PlatformSelectProps {
  css?: CSS
}

const PlatformSelect = ({ css }: PlatformSelectProps): JSX.Element => {
  const router = useRouter()
  const { page, platform } = useRoute() ?? { page: '/', platform: 'ios' }
  const { href: androidHref } = useLink(page, { platform: 'android' })
  const { href: iosHref } = useLink(page, { platform: 'ios' })

  return (
    <Root css={css}>
      <ControlledPlatformSelect
        css={{
          '$$size': '18px',
          '@md': { $$size: '22px' },
          '@lg': { $$size: '26px' },
        }}
        selectedPlatform={platform}
        onPlatformSelect={platform => {
          router.push(platform === 'ios' ? iosHref : androidHref, undefined, {
            scroll: false,
          })
        }}
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
