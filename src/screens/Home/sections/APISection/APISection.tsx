import { useAtom } from 'jotai'

import platformAtom from '@src/atoms/platformAtom'
import Box from '@src/components/Box'
import { MDX, useMDXDirectory } from '@src/lib/mdx'
import Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

import Header from './Header'

const APISection = (): JSX.Element => {
  const [platform] = useAtom(platformAtom)
  const mdx = useMDXDirectory()

  return (
    <Section
      css={{
        '@lg': {
          maxWidth: '90vw',
          display: 'flex',
          gap: '2rem',
        },
      }}
    >
      <Container>
        <Box>
          <Header>Type-safe serialization</Header>
          <MDX {...mdx[`sections/APISection/${platform}/serialization.mdx`]} />
        </Box>
        <Box>
          <Header>Asynchronous reactivity</Header>
          <MDX {...mdx[`sections/APISection/${platform}/reactivity.mdx`]} />
        </Box>
      </Container>
    </Section>
  )
}

const Container = styled(Box, {
  'display': 'grid',
  'gridTemplateColumns': 'minmax(0, 1fr)',

  '@lg': {
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
})

export default APISection
