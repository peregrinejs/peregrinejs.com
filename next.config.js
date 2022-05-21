const remarkTextr = require('remark-textr')
const typographicBase = require('typographic-base')
const nextMDX = require('@next/mdx')
const remarkGfm = require('remark-gfm')

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
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
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: false,
      },
    ]
  },
})

module.exports = nextConfig
