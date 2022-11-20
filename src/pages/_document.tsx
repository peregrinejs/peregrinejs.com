import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText, theme } from '@src/stitches.config'

class MyDocument extends Document {
  render(): JSX.Element {
    const weights = Object.values(theme.fontWeights).map(weight => weight.value)
    const query = `ital,wght@${weights
      .map(weight => `0,${weight}`)
      .join(';')};${weights.map(weight => `1,${weight}`).join(';')}`

    return (
      <Html>
        <Head>
          <link
            href={`https://fonts.googleapis.com/css2?family=Lato:${query}&display=optimal`}
            rel="stylesheet"
          />
          <link rel="icon" href="/peregrine.svg" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
