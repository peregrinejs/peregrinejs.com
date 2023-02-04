import Box from '@src/components/Box'
import Content from '@src/components/Content'
import CurrentYear from '@src/components/CurrentYear'
import Link from '@src/components/Link'
import LogoIcon from '@src/components/LogoIcon'
import useTranslate from '@src/i18n/useTranslate'
import { styled } from '@src/stitches.config'

import List from './List'
import ListItem from './ListItem'

const Footer = (): JSX.Element => {
  const t = useTranslate()

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
            <Link href="https://caracal.tech" icon={false}>
              Caracal LLC
            </Link>
          </Copyright>
        </Colophon>
        <Box>
          <Heading>{t('Footer.Overview.title')}</Heading>
          <List>
            <ListItem href="/philosophy">{t('Philosophy.name')}</ListItem>
            <ListItem href="/comparison">{t('Comparison.name')}</ListItem>
            <ListItem href="/license">{t('License.name')}</ListItem>
          </List>
        </Box>
        <Box>
          <Heading>{t('Documentation.name')}</Heading>
          <List>
            <ListItem href="/docs/ios/introduction">
              {t('Documentation.Introduction.name')}
            </ListItem>
            <ListItem href="/docs/ios/architecture">
              {t('Documentation.Architecture.name')}
            </ListItem>
            <ListItem href="/docs/ios/tour">
              {t('Documentation.QuickTour.name')}
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading>{t('Footer.Community.title')}</Heading>
          <List>
            <ListItem href="https://github.com/peregrinejs">GitHub</ListItem>
            <ListItem href="https://discord.gg/qHpG99q9Mp">Discord</ListItem>
            <ListItem href="https://fosstodon.org/@peregrine">
              Mastodon
            </ListItem>
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
