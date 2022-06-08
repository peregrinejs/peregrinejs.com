import { promises as fs } from 'fs'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

import type Platform from '@src/Platform'
import { PLATFORMS } from '@src/Platform'
import Layout from '@src/components/docs/Layout'
import docsComponents from '@src/lib/mdx/docs/components'
import omitNil from '@src/lib/omitNil'

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
  locale?: string
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: Path[] = []

  for await (const file of getFilesR(pagesDir)) {
    const page = file
      .substring(pagesDir.length + 1, file.lastIndexOf('.'))
      .split('/')

    for (const locale of locales ?? [undefined]) {
      for (const platform of PLATFORMS) {
        const path: Path = {
          params: { page: [platform, ...page] },
          locale,
        }

        paths.push(omitNil(path))
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
> = async context => {
  const { params, locale } = context
  const [platform, ...pageParts] = params!.page
  const page = pageParts.join('/')
  const file = path.resolve(pagesDir, page + '.mdx')
  const contents = await fs.readFile(file, 'utf8')
  const mdx = await serialize(contents, { parseFrontmatter: true })

  return {
    props: omitNil({
      platform,
      page,
      locale,
      content: mdx,
    }),
  }
}

export interface DocsPageProps {
  platform: Platform
  page: string
  locale?: string
  content: MDXRemoteSerializeResult
}

const DocsPage = ({ content, ...props }: DocsPageProps): JSX.Element => {
  const frontmatter: { [key: string]: any } = content.frontmatter as any

  return (
    <Layout title={frontmatter.title}>
      <MDXRemote {...content} components={docsComponents} />
    </Layout>
  )
}

export default DocsPage
