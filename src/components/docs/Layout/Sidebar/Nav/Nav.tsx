import Box from '@src/components/Box'
import { styled } from '@src/stitches.config'

import Category from './Category'
import Item from './Item'

const Nav = (): JSX.Element => {
  return (
    <Root>
      <Category heading="Overview">
        <List>
          <Item href="introduction">Introduction</Item>
          <Item href="architecture">Architecture</Item>
        </List>
      </Category>
      <Category heading="Getting Started">
        <List>
          <Item href="requirements">Project Requirements</Item>
          <Item href="tour">Quick Tour</Item>
          <Item href="install">Install</Item>
        </List>
      </Category>
      <Category heading="Reference">
        <List>
          <Item href="reference/web-frames">Web Frames</Item>
          <Item href="reference/functions">Functions</Item>
          <Item href="reference/observables">Observables</Item>
          <Item href="reference/path-handlers">Path Handlers</Item>
          <Item href="reference/web-client">Web Client</Item>
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
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  margin: '0 0 $headerPadding',
})

const List = styled('menu', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

export default Nav
