import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXRemote } from 'next-mdx-remote'

import components from './components'

export type MDXProps = MDXRemoteSerializeResult

const MDX = (props: MDXProps): JSX.Element => {
  return <MDXRemote {...props} components={components} />
}

export default MDX
