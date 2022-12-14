import Box from '@src/components/Box'
import useTranslate from '@src/i18n/useTranslate'
import Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

import GridItem from './GridItem'

const RoadmapSection = (): JSX.Element => {
  const t = useTranslate()

  return (
    <Section>
      <h2>{t('Home.RoadmapSection.title')}</h2>
      <Grid>
        <GridItem
          icon="book"
          title={t('Home.RoadmapSection.RecipeBook.title')}
          description={t('Home.RoadmapSection.RecipeBook.description')}
        />
        <GridItem
          icon="rocket"
          title={t('Home.RoadmapSection.StableRelease.title')}
          description={t('Home.RoadmapSection.StableRelease.description')}
        />
        <GridItem
          icon="flash"
          title={t('Home.RoadmapSection.PerformanceEnhancements.title')}
          description={t(
            'Home.RoadmapSection.PerformanceEnhancements.description',
          )}
        />
        <GridItem
          icon="radio"
          title={t('Home.RoadmapSection.AndroidBinarySupport.title')}
          description={t(
            'Home.RoadmapSection.AndroidBinarySupport.description',
          )}
        />
        <GridItem
          icon="color-palette"
          title={t('Home.RoadmapSection.AppPortfolio.title')}
          description={t('Home.RoadmapSection.AppPortfolio.description')}
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
