import { styled } from '@src/stitches.config'

import APISection from './sections/APISection'
import IntroSection from './sections/IntroSection'
import NewsletterSection from './sections/NewsletterSection'

const Home = (): JSX.Element => {
  return (
    <Main>
      <IntroSection />
      <APISection />
      <NewsletterSection />
    </Main>
  )
}

const Main = styled('main')

export default Home
