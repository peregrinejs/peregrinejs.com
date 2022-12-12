import Box from '@src/components/Box'
import Link from '@src/components/Link'
import Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

import GridItem from './GridItem'

const RoadmapSection = (): JSX.Element => {
  return (
    <Section>
      <h2>Roadmap</h2>
      <Grid>
        <GridItem
          icon="book"
          title="Recipe Book"
          description={
            <>
              Create a shared repository for native code snippets, called{' '}
              <Link href="/philosophy#recipes-not-plugins">Recipes</Link>.
            </>
          }
        />
        <GridItem
          icon="rocket"
          title="1.0 Release"
          description="Reach version 1.0.0 on Peregrine for Web, iOS, and Android."
        />
        <GridItem
          icon="flash"
          title="Performance Enhancements"
          description="Only use HTTP/MessageChannels for the bridge when necessary."
        />
        <GridItem
          icon="radio"
          title="Binary support for Android"
          description="Bring parity with iOS by supporting binary data."
        />
        <GridItem
          icon="color-palette"
          title="App Portfolio"
          description="Celebrate and showcase success stories of Peregrine users."
        />
      </Grid>
    </Section>
  )
}

const Grid = styled(Box, {
  '$$columns': 1,

  'display': 'grid',
  'gap': '1em',
  'gridTemplateColumns': 'repeat($$columns, 1fr)',

  '@md': {
    $$columns: 2,
    gap: '2em',
  },

  '@lg': {
    $$columns: 3,
  },
})

export default RoadmapSection
