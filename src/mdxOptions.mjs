import rehypeShiki from '@imhoff/rehype-shiki'
import remarkGfm from 'remark-gfm'
import remarkTextr from 'remark-textr'
import shiki from 'shiki'
import typographicBase from 'typographic-base'

const highlighter = await shiki.getHighlighter({ theme: 'css-variables' })

/** @type {import('@mdx-js/mdx').CompileOptions} */
const options = {
  remarkPlugins: [
    [
      remarkTextr,
      {
        plugins: [typographicBase],
        options: { locale: 'en-us' },
      },
    ],
    remarkGfm,
  ],
  rehypePlugins: [[rehypeShiki, { highlighter }]],
  providerImportSource: '@mdx-js/react',
}

export default options
