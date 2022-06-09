import { promises as fs } from 'fs'
import omit from 'lodash/fp/omit'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

import type Platform from '@src/Platform'
import { PLATFORMS, prettyPlatform } from '@src/Platform'
import Layout from '@src/components/docs/Layout'
import docsComponents from '@src/lib/mdx/docs/components'
import omitNil from '@src/lib/omitNil'
import _mdxOptions from '@src/mdxOptions'

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

export const getStaticPaths: GetStaticPaths = async context => {
  const paths: Path[] = []
  const locales: (string | undefined)[] = context.locales ?? [undefined]

  // do not generate docs for the 'default' locale
  // https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
  const filteredLocales = locales.filter(l => l !== 'default')

  for await (const file of getFilesR(pagesDir)) {
    const page = file
      .substring(pagesDir.length + 1, file.lastIndexOf('.'))
      .split('/')

    for (const locale of filteredLocales) {
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
> = async ({ params, locale }) => {
  if (!params?.page) {
    throw new Error(`Expected 'page' param`)
  }

  const [platform, ...pageParts] = params.page
  const page = pageParts.join('/')
  const file = path.resolve(pagesDir, page + '.mdx')
  const contents = await fs.readFile(file, 'utf8')
  const mdxOptions = omit(['outputFormat', 'providerImportSource'], _mdxOptions)
  const mdx = await serialize(contents, {
    scope: {
      platform: prettyPlatform(platform),
    },
    mdxOptions,
    parseFrontmatter: true,
  })

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

const DocsPage = ({ content, platform }: DocsPageProps): JSX.Element => {
  const frontmatter: { [key: string]: any } = content.frontmatter as any

  return (
    <Layout title={frontmatter.title} platform={platform}>
      <MDXRemote {...content} components={docsComponents} />
    </Layout>
  )
}

export default DocsPage
