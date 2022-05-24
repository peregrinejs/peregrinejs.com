import Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

import Section from '../components/Section'

const IntroSection = (): JSX.Element => {
  return (
    <Section
      css={{
        '@lg': {
          maxWidth: '60vw',
        },
      }}
    >
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
        Peregrine was built for{' '}
        <strong>curious, detail-oriented developers</strong> to explore the{' '}
        <strong>full potential of iOS and Android</strong> while providing the
        essentials for <strong>feature-rich web views</strong>.
      </Subtitle>
    </Section>
  )
}

const Title = styled('h1', {})

const Subtitle = styled('p', {
  '@md': {
    fontSize: '$lg',
    marginRight: '5rem',
  },
})

export default IntroSection
