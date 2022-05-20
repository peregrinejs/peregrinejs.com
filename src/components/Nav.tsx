import Link from 'next/link'

import { styled } from '@src/stitches.config'

const Nav = (): JSX.Element => {
  return (
    <Root>
      <Link href="/docs" passHref>
        <NavItem>Docs</NavItem>
      </Link>
      <Link href="/license" passHref>
        <NavItem>License</NavItem>
      </Link>
      <Link href="https://github.com/peregrinejs" passHref>
        <NavItem>GitHub</NavItem>
      </Link>
    </Root>
  )
}

const Root = styled('nav', {
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  gap: 'calc($navItemPaddingX * 2)',
  userSelect: 'none',
})

const NavItem = styled('a', {
  display: 'block',
  padding: '$navItemPaddingY $navItemPaddingX',
  fontWeight: '$bold',
})

export default Nav
