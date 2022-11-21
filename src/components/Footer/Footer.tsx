import Link from 'next/link'

import Box from '@src/components/Box'
import Content from '@src/components/Content'
import CurrentYear from '@src/components/CurrentYear'
import LogoIcon from '@src/components/LogoIcon'
import { styled } from '@src/stitches.config'

import List from './List'
import ListItem from './ListItem'

const Footer = (): JSX.Element => {
  return (
    <Content>
      <Grid>
        <Colophon>
          <Link href="/">
            <LogoIcon css={{ $$size: '32px' }} />
          </Link>
          <Copyright>
            Peregrine
            <br />
            &copy; <CurrentYear />{' '}
            <Link href="https://caracal.tech" target="_blank">
              Caracal LLC
            </Link>
          </Copyright>
        </Colophon>
        <Box>
          <Heading>Overview</Heading>
          <List>
            <ListItem href="/philosophy">Philosophy</ListItem>
            <ListItem href="/comparison">Comparison</ListItem>
            <ListItem href="/licenses">Licenses</ListItem>
          </List>
        </Box>
        <Box>
          <Heading>Docs</Heading>
          <List>
            <ListItem href="/docs/ios/introduction">Introduction</ListItem>
            <ListItem href="/docs/ios/architecture">Architecture</ListItem>
            <ListItem href="/docs/ios/tour">Quick Tour</ListItem>
          </List>
        </Box>
        <Box>
          <Heading>Community</Heading>
          <List>
            <ListItem href="https://github.com/peregrinejs">GitHub</ListItem>
            <ListItem href="https://discord.gg/qHpG99q9Mp">Discord</ListItem>
          </List>
        </Box>
      </Grid>
    </Content>
  )
}

const Grid = styled('footer', {
  'padding': '$headerPadding',

  '@md': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
})

const Colophon = styled(Box, {
  '& a': {
    color: 'rgb($gray1)',
  },
})

const Copyright = styled('h6', {
  fontWeight: '$light',
  margin: '0.5em 0',
  lineHeight: 1.5,
})

const Heading = styled('h5', {
  '@md': {
    marginTop: 0,
  },
})

export default Footer
