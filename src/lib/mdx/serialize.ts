import omit from 'lodash/fp/omit'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize as serializeMdx } from 'next-mdx-remote/serialize'

import mdxOptions from '@src/mdxOptions.mjs'

export type Scope = Record<string, any>
export type SerializeResult = MDXRemoteSerializeResult<Scope>

export interface Frontmatter {
  readonly title?: string
  readonly description?: string
}

export default async function serialize(
  contents: string,
  scope?: Scope,
): Promise<SerializeResult> {
  const mdx = await serializeMdx(contents, {
    scope,
    mdxOptions: omit(['outputFormat', 'providerImportSource'], mdxOptions),
    parseFrontmatter: true,
  })

  return mdx
}
