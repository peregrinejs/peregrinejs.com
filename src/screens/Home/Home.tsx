import { styled } from '@src/stitches.config'

import APISection from './sections/APISection'
import IntroSection from './sections/IntroSection'

const Home = (): JSX.Element => {
  return (
    <Main>
      <IntroSection />
      <APISection />
    </Main>
  )
}

const Main = styled('main')

export default Home
