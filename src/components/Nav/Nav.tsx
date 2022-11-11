import { styled } from '@src/stitches.config'

import Item from './Item'

const Nav = (): JSX.Element => {
  return (
    <Root>
      <Item href="/docs/ios/introduction">Docs</Item>
      <Item href="/comparison">Comparison</Item>
      <Item href="/philosophy">Philosophy</Item>
      <Item href="/license">License</Item>
      <Item href="https://github.com/peregrinejs">GitHub</Item>
      <Item href="https://twitter.com/Peregrine_JS">Twitter</Item>
    </Root>
  )
}

const Root = styled('nav', {
  'display': 'flex',
  'flexDirection': 'column',
  'flexWrap': 'wrap',
  'gap': 'calc($navItemPaddingX * 2)',
  'userSelect': 'none',

  '@md': {
    flexDirection: 'unset',
    alignItems: 'center',
  },
})

export default Nav
