const remarkGfm = require('remark-gfm')
const remarkTextr = require('remark-textr')
const typographicBase = require('typographic-base')

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
  rehypePlugins: [],
  providerImportSource: '@mdx-js/react',
}

module.exports = options
