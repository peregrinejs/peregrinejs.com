import type { NextPage } from 'next'

import Layout from '@src/components/Layout'
import Home from '@src/screens/Home'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default HomePage
