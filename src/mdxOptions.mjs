import rehypeShiki from '@imhoff/rehype-shiki'
import remarkGfm from 'remark-gfm'
import remarkTextr from 'remark-textr'
// import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
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
    // FIXME: remark-toc doesn't detect headings within <T /> components
    // remarkToc,
  ],
  rehypePlugins: [rehypeSlug, [rehypeShiki, { highlighter }]],
  providerImportSource: '@mdx-js/react',
}

export default options
