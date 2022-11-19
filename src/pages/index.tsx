import type { GetStaticProps, NextPage } from 'next'
import path from 'node:path'

import Layout from '@src/components/Layout'
import type { MDXDirectory } from '@src/lib/mdx'
import { MDXDirectoryContext } from '@src/lib/mdx'
import { parseMDXDirectory } from '@src/lib/mdx/server'
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

export interface HomePageProps {
  mdx: MDXDirectory
}

const HomePage: NextPage<HomePageProps> = ({ mdx }) => {
  return (
    <MDXDirectoryContext.Provider value={mdx}>
      <Layout>
        <Home />
      </Layout>
    </MDXDirectoryContext.Provider>
  )
}

export default HomePage
