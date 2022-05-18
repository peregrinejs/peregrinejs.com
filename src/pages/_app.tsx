import type { AppProps } from 'next/app'

import { globalCss } from '../stitches.config'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  globalStyles()

  return <Component {...pageProps} />
}

const globalStyles = globalCss({
  '*': {
    boxShadow: 'border-box',
  },
  'html, body': {
    margin: 0,
    padding: 0,
    fontFamily: '$body',
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
})

export default MyApp
