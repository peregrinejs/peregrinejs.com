import { useAtom } from 'jotai'

import platformAtom from '@src/atoms/platformAtom'
import Box from '@src/components/Box'
import useTranslate from '@src/i18n/useTranslate'
import { MDX, useMDXDirectory } from '@src/lib/mdx'
import _Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

import Header from './Header'

const APISection = (): JSX.Element => {
  const [platform] = useAtom(platformAtom)
  const mdx = useMDXDirectory()
  const t = useTranslate()

  return (
    <Section>
      <Box>
        <Header>{t('Home.APISection.Serialization.title')}</Header>
        <MDX {...mdx[`sections/APISection/${platform}/serialization.mdx`]} />
      </Box>
      <Box>
        <Header>{t('Home.APISection.Reactivity.title')}</Header>
        <MDX {...mdx[`sections/APISection/${platform}/reactivity.mdx`]} />
      </Box>
    </Section>
  )
}

const Section = styled(_Section, {
  'display': 'grid',
  'gap': '2rem',
  'gridTemplateColumns': 'minmax(0, 1fr)',

  '@lg': {
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
})

export default APISection
