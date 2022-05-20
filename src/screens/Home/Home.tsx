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

const Main = styled('main', {
  '@lg': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default Home
