import { useAtom } from 'jotai'

import platformAtom from '@src/atoms/platformAtom'
import Box from '@src/components/Box'
import PlatformSelect from '@src/components/PlatformSelect'
import { styled } from '@src/stitches.config'

export interface HeaderProps {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  const [platform, setPlatform] = useAtom(platformAtom)

  return (
    <Root>
      <h2>{children}</h2>
      <PlatformSelect
        css={{
          '$$size': '18px',
          '@md': { $$size: '20px' },
          '@lg': { $$size: '22px' },
        }}
        selectedPlatform={platform}
        onPlatformSelect={setPlatform}
      />
    </Root>
  )
}

const Root = styled(Box, {
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'space-between',

  '& > *': {
    margin: 0,
  },
})

export default Header
