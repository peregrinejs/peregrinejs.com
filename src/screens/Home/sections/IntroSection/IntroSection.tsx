import Box from '@src/components/Box'
import { MDX, useMDXDirectory } from '@src/lib/mdx'
import _Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

const IntroSection = (): JSX.Element => {
  const mdx = useMDXDirectory()

  return (
    <Section>
      <Container>
        <Title>Build truly artisanal hybrid apps</Title>
        <Subtitle>
          <MDX {...mdx[`sections/IntroSection/subtitle.mdx`]} />
        </Subtitle>
      </Container>
    </Section>
  )
}

const Section = styled(_Section, {
  'display': 'flex',
  'alignItems': 'end',
  'color': 'rgb($gray1)',

  '@md': {
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

const Subtitle = styled(Box, {
  '@md': {
    fontSize: '$lg',
  },
})

export default IntroSection
