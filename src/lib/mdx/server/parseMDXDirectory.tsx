import { promises as fs } from 'node:fs'
import path from 'node:path'

import getFilesR from '@src/lib/getFilesR'

import type { MDXDirectory } from '../MDXDirectoryContext'
import serialize from '../serialize'

export default async function parseMDXDirectory(
  directory: string,
): Promise<MDXDirectory> {
  const mdx: MDXDirectory = {}

  for await (const filePath of getFilesR(directory)) {
    if (filePath.endsWith('.mdx')) {
      const relativeFilePath = path.relative(directory, filePath)
      const contents = await fs.readFile(filePath, 'utf8')
      const result = await serialize(contents)

      mdx[relativeFilePath] = result
    }
  }

  return mdx
}
