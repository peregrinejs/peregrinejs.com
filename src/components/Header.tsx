import Link from 'next/link'

import Logo from '@src/components/Logo'
import Nav from '@src/components/Nav'
import { styled } from '@src/stitches.config'

export interface HeaderProps {
  home?: boolean
}

const Header = ({ home = false }: HeaderProps): JSX.Element => {
  return (
    <Root home={home}>
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

  '@lg': {
    maxWidth: '90vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 0,
    paddingRight: 0,
  },

  'variants': {
    home: {
      true: {
        '& *': {
          color: 'rgb($gray1)',
        },
      },
    },
  },
})

export default Header
