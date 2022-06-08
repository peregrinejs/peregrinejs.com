import { compile } from '@mdx-js/mdx'
import { promises as fs } from 'fs'
import type { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path'

import type Platform from '@src/Platform'
import { PLATFORMS } from '@src/Platform'
import Layout from '@src/components/docs/Layout'
import mdxOptions from '@src/mdxOptions'

const pagesDir = path.resolve(process.cwd(), 'src/docs')

async function* getFilesR(dir: string): AsyncIterableIterator<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const p = path.resolve(dir, entry.name)

    if (entry.isDirectory()) {
      yield* getFilesR(p)
    } else {
      yield p
    }
  }
}

interface Path {
  params: { page: [Platform, ...string[]] }
  locale: string
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: Path[] = []

  for await (const file of getFilesR(pagesDir)) {
    const page = file
      .substring(pagesDir.length + 1, file.lastIndexOf('.'))
      .split('/')

    for (const locale of locales!) {
      for (const platform of PLATFORMS) {
        paths.push({ params: { page: [platform, ...page] }, locale })
      }
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  DocsPageProps,
  { page: [Platform, ...string[]] }
> = async ({ params, locale }) => {
  const [platform, ...pageParts] = params!.page
  const page = pageParts.join('/')
  const file = path.resolve(pagesDir, page + '.mdx')
  const contents = await fs.readFile(file, 'utf8')
  const mdx = await compile(contents, mdxOptions as any)

  return {
    props: {
      platform,
      page,
      locale: locale!,
      content: String(mdx),
    },
  }
}

export interface DocsPageProps {
  platform: Platform
  page: string
  locale: string
  content: string
}

const DocsPage = ({ ...props }: DocsPageProps): JSX.Element => {
  return <Layout>{props.content}</Layout>
}

export default DocsPage
