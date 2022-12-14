import Box from '@src/components/Box'
import Text from '@src/components/Text'
import useTranslate from '@src/i18n/useTranslate'
import _Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

const IntroSection = (): JSX.Element => {
  const t = useTranslate()

  return (
    <Section>
      <Container>
        <Title>{t('Home.tagline')}</Title>
        <Subtitle as="p">{t('Home.summary')}</Subtitle>
      </Container>
    </Section>
  )
}

const Section = styled(_Section, {
  'display': 'flex',
  'alignItems': 'end',
  'color': 'rgb($gray1)',

  '@md': {
    width: '100%',
    height: '100vh',
  },
})

const Container = styled(Box, {
  '@md': {
    width: '85%',
    marginBottom: '4rem',
  },

  '@lg': {
    width: '65%',
  },
})

const Title = styled('h2', {
  margin: '2rem 0 0',
  fontSize: '3rem',
  lineHeight: '1em',
})

const Subtitle = styled(Text, {
  '@md': {
    fontSize: '$lg',
  },
})

export default IntroSection
