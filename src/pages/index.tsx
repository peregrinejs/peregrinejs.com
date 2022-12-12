import type { GetStaticProps, NextPage } from 'next'
import path from 'node:path'

import Layout from '@src/components/Layout'
import { parseMDXDirectory } from '@src/lib/mdx/server'
import type { AppPageProps } from '@src/pages/_app'
import Home from '@src/screens/Home'

const homeScreenDir = path.resolve(process.cwd(), 'src/screens/Home')

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const mdx = await parseMDXDirectory(homeScreenDir)

  return {
    props: {
      mdx,
    },
  }
}

export type HomePageProps = AppPageProps

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <Layout description="Use Peregrine to add feature-rich web views to native apps.">
      <Home />
    </Layout>
  )
}

export default HomePage
