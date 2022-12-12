import { styled } from '@src/stitches.config'

import APISection from './sections/APISection'
import IntroSection from './sections/IntroSection'
import NewsletterSection from './sections/NewsletterSection'
import RoadmapSection from './sections/RoadmapSection'

const Home = (): JSX.Element => {
  return (
    <Main>
      <IntroSection />
      <APISection />
      <RoadmapSection />
      <NewsletterSection />
    </Main>
  )
}

const Main = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1em',
  marginBottom: '4rem',
})

export default Home
