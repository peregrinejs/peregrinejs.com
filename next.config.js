const nextMDX = require('@next/mdx')
const remarkGfm = require('remark-gfm')
const remarkTextr = require('remark-textr')
const typographicBase = require('typographic-base')

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
  i18n: {
    locales: ['default', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  async redirects() {
    // also see _middleware.ts for the locale redirect
    return [
      {
        source: '/docs',
        destination: '/docs/ios/introduction',
        permanent: false,
      },
      {
        source: '/docs/:platform(android|ios)',
        destination: '/docs/:platform/introduction',
        permanent: false,
      },
    ]
  },
})

module.exports = nextConfig
