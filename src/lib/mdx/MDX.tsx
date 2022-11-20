import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXRemote } from 'next-mdx-remote'

import components from './components'

export type MDXProps = MDXRemoteSerializeResult

const MDX = (props: MDXProps): JSX.Element => {
  if (!props?.compiledSource) {
    throw new Error('MDX must be passed a compiledSource')
  }

  return <MDXRemote {...props} components={components} />
}

export default MDX
