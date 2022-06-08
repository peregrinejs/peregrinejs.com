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
    locales: ['default', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/docs/:platform(android|ios)/:path*',
          destination: '/docs/:path*?platform=:platform',
        },
      ],
    }
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
      {
        source: '/docs/:path((?!ios)(?!android).*)',
        destination: '/docs/ios/:path',
        permanent: false,
      },
    ]
  },
})

module.exports = nextConfig
