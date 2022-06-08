const remarkTextr = require('remark-textr')
const typographicBase = require('typographic-base')
const remarkGfm = require('remark-gfm')

const mdxOptions = {
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
  rehypePlugins: [],
  providerImportSource: '@mdx-js/react',
}

module.exports = mdxOptions
