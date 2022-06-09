const nextMDX = require('@next/mdx')
const mdxOptions = require('./src/mdxOptions')

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: mdxOptions,
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  i18n: {
    // https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
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
