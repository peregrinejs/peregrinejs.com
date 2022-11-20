import type { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { promises as fs } from 'node:fs'
import path from 'node:path'

import type Platform from '@src/Platform'
import { PLATFORMS, prettyPlatform } from '@src/Platform'
import Layout from '@src/components/docs/Layout'
import FrontmatterContext from '@src/lib/docs/FrontmatterContext'
import getFilesR from '@src/lib/getFilesR'
import docsComponents from '@src/lib/mdx/docs/components'
import type { SerializeResult } from '@src/lib/mdx/serialize'
import serialize from '@src/lib/mdx/serialize'
import omitNil from '@src/lib/omitNil'

const pagesDir = path.resolve(process.cwd(), 'src/docs')

type PathParams = {
  page: [Platform, ...string[]]
}

interface Path {
  params: PathParams
  locale?: string
}

interface Scope {
  platform: string
  platformLanguage: string
}

export const getStaticPaths: GetStaticPaths<PathParams> = async context => {
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
          params: {
            page: [platform, ...page],
          },
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
  PathParams
> = async ({ params, locale }) => {
  if (!params) {
    throw new Error('Expected params to be defined')
  }

  const [platform, ...pageParts] = params.page
  const page = pageParts.join('/')
  const file = path.resolve(pagesDir, page + '.mdx')
  const contents = await fs.readFile(file, 'utf8')

  const scope: Scope = {
    platform: prettyPlatform(platform),
    platformLanguage: platform === 'ios' ? 'Swift' : 'Kotlin',
  }

  const mdx = await serialize(contents, scope)

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
  content: SerializeResult
}

const DocsPage = ({ content, platform }: DocsPageProps): JSX.Element => {
  return (
    <FrontmatterContext.Provider value={{ ...(content.frontmatter as any) }}>
      <Layout platform={platform}>
        <MDXRemote {...content} components={docsComponents} />
      </Layout>
    </FrontmatterContext.Provider>
  )
}

export default DocsPage
