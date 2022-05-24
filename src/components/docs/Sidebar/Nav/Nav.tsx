import Box from '@src/components/Box'
import { styled } from '@src/stitches.config'

import Category from './Category'
import Item from './Item'

const Nav = (): JSX.Element => {
  return (
    <Root>
      <Category heading="Overview">
        <List>
          <Item href="/docs/introduction">Introduction</Item>
          <Item href="/docs/comparison">Comparison</Item>
          <Item href="/docs/philosophy">Philosophy</Item>
          <Item href="/docs/architecture">Architecture</Item>
        </List>
      </Category>
      <Category heading="Getting Started">
        <List>
          <Item href="/docs/quickstart">Quickstart</Item>
        </List>
      </Category>
      <Category heading="Community">
        <List>
          <Item href="https://github.com/peregrinejs">GitHub</Item>
          <Item href="https://twitter.com/Peregrine_JS">Twitter</Item>
        </List>
      </Category>
    </Root>
  )
}

const Root = styled(Box, {
  padding: '0 0 $headerPadding',
})

const List = styled('ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

export default Nav