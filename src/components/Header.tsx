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
  'display': 'flex',
  'flexDirection': 'column',
  'placeContent': 'center space-between',
  'padding': '$headerPadding',
  'gap': '$headerPadding',

  '@md': {
    flexDirection: 'unset',
  },
})

export default Header
