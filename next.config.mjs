import nextMDX from '@next/mdx'
import mdxOptions from './src/mdxOptions.mjs'

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
    // also see middleware.ts for the locale redirect
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
  experimental: {
    // The docs are a single NextJS page which utilizes `getStaticProps` with
    // markdown content, some of which exceeds the 128kb limit.
    largePageDataBytes: 512 * 1024,
  },
  webpack: config => {
    config.experiments = {
      layers: true,
      topLevelAwait: true,
    }

    return config
  },
})

export default nextConfig
