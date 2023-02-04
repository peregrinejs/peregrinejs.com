import useTranslate from '@src/i18n/useTranslate'
import { styled } from '@src/stitches.config'

import Item from './Item'

const Nav = (): JSX.Element => {
  const t = useTranslate()

  return (
    <Root>
      <Item href="/philosophy">{t('Philosophy.name')}</Item>
      <Item href="/comparison">{t('Comparison.name')}</Item>
      <Item href="/docs/ios/introduction">{t('Documentation.name')}</Item>
      <Item href="https://github.com/peregrinejs">GitHub</Item>
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
