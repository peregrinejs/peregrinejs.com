import { styled } from '@src/stitches.config'
import Item from './Item'

const Nav = (): JSX.Element => {
  return (
    <Root>
      <Item href="/docs">Docs</Item>
      <Item href="/license">License</Item>
      <Item href="https://github.com/peregrinejs">GitHub</Item>
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

export default Nav
