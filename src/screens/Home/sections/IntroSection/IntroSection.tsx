import Box from '@src/components/Box'
import Text from '@src/components/Text'
import { MDX, useMDXDirectory } from '@src/lib/mdx'
import _Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

const IntroSection = (): JSX.Element => {
  const mdx = useMDXDirectory()

  return (
    <Section>
      <Title>
        <Text
          css={{
            display: 'block',
            color: 'rgb($gray2)',
          }}
        >
          The mobile web has evolved.
        </Text>
        <Text
          css={{
            display: 'block',
          }}
        >
          Native containers for web apps should, too.
        </Text>
      </Title>
      <Subtitle>
        <MDX {...mdx[`sections/IntroSection/subtitle.mdx`]} />
      </Subtitle>
    </Section>
  )
}

const Section = styled(_Section, {
  '@lg': {
    maxWidth: '60vw',
  },
})

const Title = styled('h1', {
  lineHeight: '1em',
})

const Subtitle = styled(Box, {
  '@md': {
    fontSize: '$lg',
    marginRight: '5rem',
  },
})

export default IntroSection
