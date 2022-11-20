import { promises as fs } from 'node:fs'
import path from 'node:path'

export default async function* getFilesR(
  dir: string,
): AsyncIterableIterator<string> {
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
