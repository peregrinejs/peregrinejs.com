import Link from 'next/link'

import Logo from '@src/components/Logo'
import Nav from '@src/components/Nav'
import { styled } from '@src/stitches.config'

const Header = (): JSX.Element => {
  return (
    <Root>
      <Link href="/">
        <Logo />
      </Link>
      <Nav />
    </Root>
  )
}

const Root = styled('header', {
  display: 'flex',
  placeContent: 'center space-between',
  padding: '$headerPadding',
})

export default Header
