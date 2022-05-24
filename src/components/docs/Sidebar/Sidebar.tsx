import { useAtom } from 'jotai'
import Link from 'next/link'

import sidebarAtom from '@src/atoms/sidebarAtom'
import Box from '@src/components/Box'
import IconButton from '@src/components/IconButton'
import Logo from '@src/components/Logo'
import MenuIcon from '@src/icons/MenuIcon'
import { styled } from '@src/stitches.config'

import Nav from './Nav'

const Sidebar = (): JSX.Element => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)

  const toggleSidebar = () =>
    setSidebar(sidebar => ({ ...sidebar, open: !sidebar.open }))

  return (
    <Root>
      <Topbar>
        <Link href="/" passHref>
          <Logo />
        </Link>
        <MenuButton icon={MenuIcon} onClick={toggleSidebar} />
      </Topbar>
      {sidebar.open ? <Nav /> : null}
    </Root>
  )
}

const Root = styled(Box, {
  'borderStyle': 'solid',
  'borderColor': 'rgb($gray4)',
  'borderWidth': 0,
  'borderBottomWidth': 1,

  '@md': {
    width: 216,
    height: '100vh',
    overflowY: 'scroll',
    borderRightWidth: 1,
  },

  '@lg': {
    width: 272,
  },
})

const Topbar = styled(Box, {
  display: 'flex',
  padding: '$headerPadding',
  justifyContent: 'space-between',
  userSelect: 'none',
})

const MenuButton = styled(IconButton, {
  '@md': { display: 'none' },
})

export default Sidebar
